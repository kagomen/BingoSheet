'use strict';
{
  // ========= column[]を作るcreateColumn()を定義 ==========
  function createColumn(col) {
    // 仮引数colに応じてsource[]を作成
    // 例) col=0 の時、source=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const source = [];
    for (let i = 1; i <= 15; i++) {
      source.push(i + (15 * col));
    }

    // source[]からランダムに1つ要素を抜き出し、column[]に5回代入
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    // 例) column=[2,9,11,4,15]
    return column;
  }


  // ========createColumn()を5回繰り返し、columns[]に代入 =========
  const columns = [];
  for (let i = 0; i < 5; i++) {
    columns[i] = createColumn(i);
  }
  // 例) columns = [ [1~15], [16~30], [...], [...], [...] ]
  // 真ん中をFREEにする
  columns[2][2] = 'FREE';


  // ==================== HTML側の処理 ======================
  for (let j = 0; j < 5; j++) {
    // HTMLに<tr>を作る
    const tr = document.createElement('tr');
    // <td>を5つ作り値を配列columnsから代入
    for (let i = 0; i < 5; i++) {
      const td = document.createElement('td');
      td.textContent = columns[i][j];
      // <td>を<tr>の子要素に追加
      tr.appendChild(td);
    }
    // <tr>を<tbody>の子要素に追加
    document.querySelector('tbody').appendChild(tr);
  }

  // 更新ボタン
  document.getElementById('btn').addEventListener("click", () => {
    window.location.reload();
  });

}