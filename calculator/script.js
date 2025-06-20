let output = "";

function press(val) {
  output += val;
  document.getElementById("display").value = output;
}

function calculate() {
  try {
    output = eval(output).toString();
    document.getElementById("display").value = output;
  } catch {
    document.getElementById("display").value = "Error";
    output = "";
  }
}

function clearDisplay() {
  output = "";
  document.getElementById("display").value = "";
}
