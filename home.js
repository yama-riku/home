//メニューアイコンのアニメーション
document.addEventListener('DOMContentLoaded',function(){
  //↑ドキュメント、イベントを追加してい、htmlが読み込まれたら機能がはたらくという意味。
  document.getElementById("menuicon").addEventListener("click",function(){
      this.classList.toggle("active");
      document.getElementById("nav").classList.toggle("active");
    })
  //htmlからidを取得する。クリックしたらイベントを追加する。クリックしたものに対してアクティブを切り替える。
  //タイトルのところのアニメーション
    const animationTargetElements = document.querySelectorAll(".title1");
    for (let i = 0; i < animationTargetElements.length; i++){
        const targetElement = animationTargetElements[i],
            texts = targetElement.textContent,
            textsArray = [];

        targetElement.textContent = "";

        for (let j = 0; j < texts.split("").length; j++){
            const t = texts.split("")[j];
            if(t === " "){
                textsArray.push(" ");
            } else{
                textsArray.push('<span><span style="animation-delay: ' + (j * .1) + 's;">' + t + '</span></span>')
            }
        }   
        
        for (let k = 0; k < textsArray.length; k++){
            targetElement.innerHTML += textsArray[k];  
        }
    }

});


