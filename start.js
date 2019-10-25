// GET Request
function getTodos() {
  console.log("GET Request");
}

// Post Request
function addTodo() {
  console.log("POST Request");
}

// PUT/PATCH Request
function updateTodo() {
  console.log("Update Request");
}

// DELETE Request
function removeTodo() {
  console.log("Delete Request");
}

// SIMULATANEOUS Data
function getData() {
  console.log("Simultaneous Request");
}

// CUSTOM Headers
function customHeaders() {
  console.log("Custom Headers");
}

// Transforming Requests & Responses
function transformResponse() {
  console.log("Transfom Response");
}

// Error Handling
function errorHandling() {
  console.log("Error Handling");
}

// CANCEL token
function cancelToken() {
  console.log("Cancel Token");
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
    </div>

    <div class="card mt-3">
    <div class="card-header">Headers</div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
      <div class="card-header">Data</div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
      <div class="card-header">Config</div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
    `;
}

// Event Listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("add").addEventListener("click", addTodos);
document.getElementById("update").addEventListener("click", updateTodos);
document.getElementById("delete").addEventListener("click", removeTodos);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
