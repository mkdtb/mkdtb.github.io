// ページ読み込み後の処理
window.onload = function()
{
    main();
}

function main()
{
    setInterval("getJsonp_GAS()", 5000);
}

function getJsonp_GAS()
{
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbxK4VCS7w0VxCg5nv5CTOLvO5sbUCKuJdixiu1iA2Pv_2DXyH-o/exec?param=TeamData',
        dataType: 'jsonp',
        jsonpCallback: 'jsondata',
        success: function(json) {
            var team_index;
            if (selectTeam == "1p")
            {
                team_index = 0;
            } else if (selectTeam == "2p") {
                team_index = 1;
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
            var idIndex = 0;
            var team_member_text_id = "team_member_text";
            
            team_memberDatas.forEach(function(elem) {
                var $displayItem = $('<p/>', {
                    align : "center"
                })
                
                $displayItem.append ($('<font/>', {
                    id : (team_member_text_id + idIndex).toString(),
                    face : "Noto Sans JP"
                }))

                if (elem.isPlayerLose) {
                    $displayItem.append ($('<font/>', {
                        face : "Noto Sans JP",
                        color : "#FF0000",
                        text : "X",
                        size : 4
                    }))
                }
                
                ++idIndex;
                addItemList.push($displayItem)
            });
            $displayBox.empty();
            $displayBox.append(addItemList);
            
            idIndex = 0;
            team_memberDatas.forEach(function(elem) {
                insertHTML((team_member_text_id + idIndex).toString(), elem.playerName, "#FFFFFF", team_memberFontSize);
                ++idIndex;
            });
            
            // 残り
            var team_remaining = json[team_index].remaining;
            insertHTML("team_remaining_text", team_remaining + "人", "#FFFFFF", 7);
        }
    });
}

function insertHTML(elementId, text, fontColor, fontSize)
{
    document.getElementById(elementId).innerHTML = text;
    document.getElementById(elementId).style.color = fontColor;
    document.getElementById(elementId).size = String(fontSize);
}
