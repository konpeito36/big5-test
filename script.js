// script.js
function calculateScores() {
    // 各特性のスコアを計算するロジックをここに記述
    let extroversion = 0;
    let agreeableness = 0;
    let conscientiousness = 0;
    let neuroticism = 0;
    let openness = 0;
    // 各質問のスコアを取得して、平均を計算
    extroversion += parseInt(document.getElementById('extroversion1').value);
    // ...他の特性の質問スライダーも同様に追加

    // 結果を表示
    alert(`外向性: ${extroversion}`);
}
