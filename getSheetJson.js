// ページ読み込み後の処理
window.onload = function()
{
    main();
}

function main()
{
    setInterval("getJsonp_GAS()", 1000);
}
 
function getJsonp_GAS()
{
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbwRqnGQpYbA27pMzrBSDzNcuypqw8MDtIesPt8E8ID_CkFWD6cN/exec',
        dataType: 'jsonp',
        jsonpCallback: 'jsondata',
        success: function(json) {
            var index = 0;
            var player1_name = json[index++].value;
            var player2_name = json[index++].value;
            var player1_fontSize = json[index++].value;
            var player1_fontColor = json[index++].value;
            var player2_fontSize = json[index++].value;
            var player2_fontColor = json[index++].value;
            if (selectPlayer == "1p")
            {
                insertHTML(player1_name, player1_fontColor, player1_fontSize);
            } else if (selectPlayer == "2p") {
                insertHTML(player2_name, player2_fontColor, player2_fontSize);
            } else {
                insertHTML("", 0 , 0);
            }
        }
    });
}

function insertHTML(player_name, fontColor, fontSize)
{
    document.getElementById('player_name_text').innerHTML = player_name;
    document.getElementById('player_name_text').style.color = fontColor;
    document.getElementById('player_name_text').size = String(fontSize);
}
