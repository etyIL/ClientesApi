
using ClientesApi.DTOs;

namespace ClientesApi.Servicios
{
    public interface IClienteService

    {
        List<ClienteDTO> GetClientes();
        ClienteDTO? GetCliente(int id);
        ClienteDTO CrearCliente(ClienteDTO cliente);
        bool EditarCliente(int id, ClienteDTO cliente);
        bool EliminarCliente(int id, ClienteDTO cliente);
        bool EliminarCliente(int id);
    }
}
