// ページ読み込み後の処理
window.onload = function()
{
    main();
}

function main()
{
    setInterval("getJsonp_GAS()", 1500);
}
 
function getJsonp_GAS()
{
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbxK4VCS7w0VxCg5nv5CTOLvO5sbUCKuJdixiu1iA2Pv_2DXyH-o/exec',
        dataType: 'jsonp',
        jsonpCallback: 'jsondata',
        success: function(json) {
            var team_index;
            if (selectTeam == "1p")
            {
                team_index = 2;
            } else if (selectTeam == "2p") {
                team_index = 3;
            }

            // チーム名
            var team_name = json[team_index].teamName;
            var team_fontSize = json[team_index].teamNameFontSize;
            var team_fontColor = json[team_index].teamNamefontColor;
            insertHTML("team_name_text", team_name, team_fontColor, team_fontSize);
            
            // チームメンバー
            var team_memberFontSize = json[team_index].teamMemberFontSize;
            var team_memberDatas = json[team_index].teamMemberDatas;
            var $displayBox = $('#teamMemberInfoBox');
            var addItemList = [];
            team_memberDatas.forEach(function(elem) {
                var $displayItem = $('<p/>', {
                    align : "center"
                })
                $displayItem.append ($('<font/>', {
                    face : "Noto Sans JP",
                    color : "#FFFFFF",
                    text : elem.playerName,
                    size : team_memberFontSize
                }))
                if (elem.isPlayerLose) {
                    $displayItem.append ($('<font/>', {
                        face : "Noto Sans JP",
                        color : "#FF0000",
                        text : "X",
                        size : 4
                    }))
                }
                addItemList.push($displayItem)
            });
            $displayBox.empty();
            $displayBox.append(addItemList);
            
            // 残り
            var team_remaining = json[team_index].remaining;
            insertHTML("team_remaining_text", team_remaining + "人", "#ffffff", 7);
        }
    });
}

function insertHTML(elementId, text, fontColor, fontSize)
{
    document.getElementById(elementId).innerHTML = text;
    document.getElementById(elementId).style.color = fontColor;
    document.getElementById(elementId).size = String(fontSize);
}
