using ClientesApi.Modelo;
using ClientesApi.DTOs;
using System.Collections.Generic;
using System.Linq;
using ClientesApi.Servicios;
using Microsoft.EntityFrameworkCore;

namespace ClientesApi.Servicios
{
    public class ClienteService : IClienteService
    {
        private readonly AppDbContext _context;

        public ClienteService(AppDbContext context)
        {
            _context = context;
        }

        public List<ClienteDTO> GetClientes()
        {
            return _context.Clientes
                .Select(c => new ClienteDTO
                {
                    Id = c.Id,
                    Nombre = c.Nombre,
                    Apellido = c.Apellido,
                    Direccion = c.Direccion
                }).ToList();
        }

        public ClienteDTO? GetCliente(int id)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.Id == id);
            if (cliente == null) return null;

            return new ClienteDTO
            {
                Id = cliente.Id,
                Nombre = cliente.Nombre,
                Apellido = cliente.Apellido,
                Direccion = cliente.Direccion
            };
        }

        public ClienteDTO CrearCliente(ClienteDTO clienteDTO)
        {
            var nuevoCliente = new Cliente
            {
               
                Nombre = clienteDTO.Nombre,
                Apellido = clienteDTO.Apellido,
                Direccion = clienteDTO.Direccion
            };

            _context.Clientes.Add(nuevoCliente);
            _context.SaveChanges();

            return new ClienteDTO
            {
                Id= nuevoCliente.Id,
                Nombre = nuevoCliente.Nombre,
                Apellido = nuevoCliente.Apellido,
                Direccion = nuevoCliente.Direccion
            };
        }

        public bool EditarCliente(int id, ClienteDTO clienteDTO)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.Id == id);
            if (cliente == null) return false;

            cliente.Nombre = clienteDTO.Nombre;
            cliente.Apellido = clienteDTO.Apellido;
            cliente.Direccion = clienteDTO.Direccion;

            _context.SaveChanges();
            return true;
        }

        public bool EliminarCliente(int id)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.Id == id);
            if (cliente == null) return false;

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return true;
        }

        public bool EliminarCliente(int id, ClienteDTO cliente)
        {
            // Si este método no tiene un propósito diferente, puede delegar al anterior.
            return EliminarCliente(id);
        }
    }
}