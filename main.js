    async function verificar() {
      const codigo = document.getElementById("codigo").value.trim().toUpperCase();

      const url = "https://script.google.com/macros/s/AKfycbyqajzFmEYgqWS5NJFnAmASM08JG-QFGzenysdjvLxEDfuWoW8ita3Nat6fjfom0zb3/exec?codigo=" + encodeURIComponent(codigo);
      const boton = document.getElementById("verificarBtn");
      boton.disabled = true;

      // Mostrar mensaje de carga
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `<div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                      </div>`;
      
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.valido) {
        resultado.innerHTML = `
        <hr>
        <p>✅ Certificado encontrado</p><hr>  
        <p><strong>Nombre:</strong> ${data.nombre}</p>
          <p><strong>DNI:</strong> ${data.dni}</p>
          <p><strong>Tipo de actividad:</strong> ${data.tipo}</p>
        <p><strong>Actividad:</strong> ${data.actividad}</p>
        <p><strong>En calidad de:</strong> ${data.calidad}</p>
        <p><strong>Fecha de emisión:</strong> ${data.fecha}</p
        `;
      } else {
        resultado.innerHTML = "<hr><p>❌ Código inválido o no encontrado.</p>";
      }
          boton.disabled = false;

    }