function unhide(i) {
  document.body.children[i].hidden = false
}
function toggle(id) {
  document.getElementById(id).hidden = !document.getElementById(id).hidden
}
function hide(i) {
  document.body.children[i].hidden = true
}
function hide_all() {
  for (i = 1; i < document.body.children.length-1; i++) {
    hide(i)
  }
}
function reset_color_style() {
  document.getElementById("color_style").innerHTML = ".module[title=Colors] {\n  --module-bg: silver;\n  --module-border-size: 1px;\n  --module-border: solid black;\n}"
}
function add_button(id, i) {
  document.getElementById(id).innerHTML += "\n<button onclick=\"add_button(\'" + id + "\', " + i + ")\">Add Button</button>"
}
function reset_buttons(id, i) {
  document.getElementById(id).innerHTML = "        <button onclick=\"unhide(" + i + ")\">Next<\/button>\r\n        <button onclick=\"add_button(\'" + id + "\', " + i + ")\">Add Button<\/button>"
}
function red(red) {
  if (red) {
    document.body.style.backgroundColor = "red"
  } else {
    document.body.style.backgroundColor = ""
  }
}
