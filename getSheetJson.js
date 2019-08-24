// ページ読み込み後の処理
window.onload = function()
{
    main();
}

function main()
{
    setInterval("getJsonp_GAS()", 3000);
}
 
function getJsonp_GAS()
{
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbxK4VCS7w0VxCg5nv5CTOLvO5sbUCKuJdixiu1iA2Pv_2DXyH-o/exec?param=PlayerData',
        dataType: 'jsonp',
        jsonpCallback: 'jsondata',
        success: function(json) {
            var player_index;
            if (selectPlayer == "1p")
            {
                player_index = 0;
            } else if (selectPlayer == "2p") {
                player_index = 1;
            } else {
                return;
            }
            var player_name = json[player_index].player_name;
            var player_fontSize = json[player_index].fontSize;
            var player_fontColor = json[player_index].fontColor;
            insertHTML(player_name, player_fontColor, player_fontSize);
        }
    });
}

function insertHTML(player_name, fontColor, fontSize)
{
    document.getElementById('player_name_text').innerHTML = player_name;
    document.getElementById('player_name_text').style.color = fontColor;
    document.getElementById('player_name_text').size = String(fontSize);
}
