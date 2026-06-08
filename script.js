<script>
  const hobbys = ["Tennis", "lesen", "schlafen", "Elena Wildberger"];
  const liste = document.getElementById("liste-hobbys");
  hobbys.forEach(h => {
    let li = document.createElement("li");
    li.textContent = h;
    liste.appendChild(li);
  });
</script>
