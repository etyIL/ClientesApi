using ClientesApi.DTOs;
using ClientesApi.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace ClientesApi.Controllers
{
    [Route("api/Clientes")]
    [ApiController]
    public class ClientesController : ControllerBase
    {

        private readonly IClienteService _clienteService;

        public ClientesController(IClienteService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        public IActionResult GetClientes()
        {
            return Ok(_clienteService.GetClientes());
        }

        [HttpGet("{id}")]
        public IActionResult GetCliente(int id)
        {
            var cliente = _clienteService.GetCliente(id);
            return cliente is not null ? Ok(cliente) : NotFound();
        }

        [HttpPost]
        public IActionResult CrearCliente([FromBody] ClienteDTO clienteDTO)
        {
            var nuevoCliente = _clienteService.CrearCliente(clienteDTO);
            if (nuevoCliente == null || nuevoCliente.Id == 0)
                return BadRequest("No se pudo crear el cliente correctamente.");

            return CreatedAtAction(nameof(GetCliente), new { id = nuevoCliente.Id }, nuevoCliente);
        }

        [HttpPut("{id}")]
        public IActionResult EditarCliente(int id, [FromBody] ClienteDTO clienteDTO)
        {
            if (!_clienteService.EditarCliente(id, clienteDTO))
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarCliente(int id)
        { 
            if (!_clienteService.EliminarCliente(id))
                return NotFound();

            return NoContent();
        }
    }
}