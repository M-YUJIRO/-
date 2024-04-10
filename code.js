// 計算結果を表示するための変数
var result = "";

// メモリに保存する変数(M+)
var memory = 0;

// 数字と演算子の入力を受け取る関数
function get_calc(btn) {
  var value = btn.value;
  
  // 数字または演算子が押された場合に処理を実行
  if (value.match(/[0-9,.]/)){
    result += value;
  } 
  else if (btn.value === "="){
    calculate();
  }
  else if (btn.value === "C"){
    result = "";
  }
  else if (btn.value === "M+"){
    saveToMemory();
  }
  else if (btn.value === "MR"){
    displayMemory();
  }
  else if (btn.value === "MC"){
    clearMemory();
  }
  else {
    result += " " + value + " ";
  }

  // 結果を表示する
  document.getElementsByName("display")[0].value = result;
}

// 計算を実行する関数
function calculate() {
  // 空白で分割して、数字と演算子を配列に分ける
  const tokens = result.split(" ");
  
  // 配列の前半部分に数字、後半部分に演算子が入るため、交互に計算を実行する
  let answer = Number(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const num = Number(tokens[i+1]);
    
    switch (operator) {
      case "+":
        answer += num;
        break;
      case "-":
        answer -= num;
        break;
      case "×":
        answer *= num;
        break;
      case "÷":
        answer /= num;
        break;
    }
  }
  
  // 結果を表示する
  result = answer;
}

// メモリに保存する関数(M+)
function saveToMemory() {
  memory = result;
}

// メモリの値を表示する関数(MR)
function displayMemory() {
  result = memory;
}

// メモリをクリアする関数(MC)
function clearMemory() {
  memory = 0;
}