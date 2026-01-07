body {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

#instructions {
  margin-bottom: 20px;
  font-weight: bold;
}

#grid {
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-template-rows: repeat(3, 60px);
  gap: 5px;
  margin-bottom: 20px;
}

.cell {
  width: 60px;
  height: 60px;
  background: lightgray;
  border: 2px solid black;
  cursor: pointer;
}

button { padding: 10px 20px; cursor: pointer; }

#moves { margin-top: 20px; max-width: 400px; }
