const div = document.querySelector(".area");
const textarea = document.querySelector('.textar');
       
        function plusFontSize() {
              textarea.style.fontSize=parseInt(textarea.style.fontSize) + 1 +'px';
        }
          function minusFontSize() {
            textarea.style.fontSize=parseInt(textarea.style.fontSize) - 1 +'px';
        }

        let btnColor = document.querySelectorAll(".knop");
        function btn (a) {
            textarea.style.backgroundColor = btnColor [a].value;
        }
        let btnTextColor =document.querySelectorAll(".knopT");
        function btnT (b) {
            textarea.style.color = btnTextColor [b].value;}