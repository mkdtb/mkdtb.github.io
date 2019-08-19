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
            var team1_name = json[2].teamName;
            var team1_fontSize = json[2].teamNameFontSize;
            var team1_fontColor = json[2].teamNamefontColor;
            var team2_name = json[3].teamName;
            var team2_fontSize = json[3].teamNameFontSize;
            var team2_fontColor = json[3].teamNamefontColor;
            if (selectPlayer == "1p")
            {
                insertHTML(team1_name, team1_fontColor, team1_fontSize);
            } else if (selectPlayer == "2p") {
                insertHTML(team2_name, team2_fontColor, team2_fontSize);
            } else {
                insertHTML("", 0 , 0);
            }
        }
    });
}

function insertHTML(team_name, fontColor, fontSize)
{
    document.getElementById('team_name_text').innerHTML = team_name;
    document.getElementById('team_name_text').style.color = fontColor;
    document.getElementById('team_name_text').size = String(fontSize);
}
