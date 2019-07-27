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
        url: 'https://script.google.com/macros/s/AKfycbxK4VCS7w0VxCg5nv5CTOLvO5sbUCKuJdixiu1iA2Pv_2DXyH-o/exec',
        dataType: 'jsonp',
        jsonpCallback: 'jsondata',
        success: function(json) {
            var player1_name = json[0].player_name;
            var player1_fontSize = json[0].fontSize;
            var player1_fontColor = json[0].fontColor;
            var player2_name = json[1].player_name;
            var player2_fontSize = json[1].fontSize;
            var player2_fontColor = json[1].fontColor;
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
