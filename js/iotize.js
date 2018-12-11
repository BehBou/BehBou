/******************************************************************************
*
*        ________
*    __ /    _  _|
*   /_//  _  \\ \
*   |_|| | | || |   ____  _     Copyright (c) IoTize 2017-2018
*   | || |_| || | |   /  / \    http://www.iotize.com
*   \ \\     // / |  /   |--
*    \_\\___//_/  | /___ \__
*
*
********************************************************************************
*@file          : index.js
*@author        : IOTIZE
*@version       : $Id: index.js 6413 2018-02-02 16:04:39Z stephane.clog $
*@brief         : Java Script management of sensor demo with IoTize module.
*
*   THIS SOFTWARE IS PROVIDED BY THE IoTize SAS DEVELOPMENT TEAM ``AS IS''
* AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
* THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
* PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE IoTize SAS' DEVELOPMENT TEAM
* OR ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS,
* OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
* WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*******************************************************************************/

var count_timeout = 0;
var SNumber = "?????";
var PublicPwd = "?????";

              
//== IoTize callbacks functions ==


function onNotifyGetIoTizeSerialNumber(coderet, value)
{
    console.log("onNotifyGetIoTizeSerialNumber: " + value);

    if ( coderet == 0 )
    {
        SNumber = value;
        $("#IoTize_SN").text(value);
    }
    else
        displayError("onNotifyGetIoTizeSerialNumber", coderet);
}

function onNotifyGetTargetConfigVersion(coderet, value)
{
    if (coderet == 0)
    {
        // Check the version of the tap config
        if ( value != config_version )
            displayError("Tap config (" + value + ")  does not match with the expected version ("+ config_version + ")", 1);
    }
}

function onNotifyConnectStatus(status)
{
    if (status == 1)
    {
        if (count_timeout == 0)
            console.log("ok");
        else
            count_timeout = count_timeout - 1;
    }
    else
        console.log("(disconnected!)");
}

function onNotifyGetVar_std(name, coderet, num)
{
    if (coderet == 0)
    {
        if ( name.substring(0,7)=="<FLOAT>" )
            document.getElementById(name).innerHTML = convert2float(num).toFixed(3);
        else if ( name.substring(0,11)=="<UNSIGNED8>" )
            document.getElementById(name).innerHTML = convert2unsigned(num, 8);
        else if ( name.substring(0,12)=="<UNSIGNED16>" )
            document.getElementById(name).innerHTML = convert2unsigned(num, 16);
        else if ( name.substring(0,12)=="<UNSIGNED32>" )
            document.getElementById(name).innerHTML = convert2unsigned(num, 32);
        else
            document.getElementById(name).innerHTML = num;
    }
    else
    {
        displayError("onNotifyGetVar_std(" + name + ")", coderet);
    }
}

function hideError()
{
    document.getElementById("Iotize_Alert").style.display = 'none';    
}

function displayError(text, code)
{
    if (text != "")
    {
        document.getElementById("Error").innerHTML = text;
        document.getElementById("Iotize_Alert").style.display = 'block';
        
    }        
    console.log("Error(" + code + "): " + text);
    count_timeout = 2;
}

 //read URL parameters
 function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? undefined : sParameterName[1];
        }
    }
};

//check parameters and build an IoTize Object
function checkIoTize() {

    if (typeof IoTize == "undefined") {

        IoTize = buildIoTize();

        //read URL parameters
        var settingsOptions = {};
        settingsOptions.broker = getUrlParameter("broker");
        settingsOptions.serialnumber = getUrlParameter("serialnumber");
        settingsOptions.uuid = getUrlParameter("uuid");
        settingsOptions.netkey = getUrlParameter("netkey");

        if ( 
             ( settingsOptions.broker == undefined  ) || 
             ( settingsOptions.serialnumber == undefined  ) ||
             ( settingsOptions.uuid == undefined  ) || 
             ( settingsOptions.netkey == undefined  ) ){
                displayError("Invalid parameters for mqtt connection.");
                 return;
             } 

        //try to connect
        IoTize.connect(0, settingsOptions, window).then(
            function (isconnected) {
                if (isconnected) {
                    registerVars();
                }
            }
        ).catch(function(e){
            console.log(e);
        });

    return false;
    }
    return true;
}
function showlogin()
{
    // Resume update messages
    enableIoTizeUpdate(false);    
}

function hidelogin()
{
    // Resume update messages
    enableIoTizeUpdate(true);    
}

// Used to hold on keyboard dialg boxes on some smartphones
function enableIoTizeUpdate(toEnable)
{
    if (typeof IoTize != "undefined")
    {
        if (toEnable)
            IoTize.StartRefresh();
        else
            IoTize.StopRefresh();
    }
}

//== IoTize commands functions ==
function login()
{
    console.log("login: "+ $('#inputLogin').val() + "/" + $('#inputPassword').val());
    
    $("#loginDialog").hide();    
    IoTize.Login($('#inputLogin').val(), $('#inputPassword').val());

    $('#inputPassword').val("");

    // Resume update messages
    enableIoTizeUpdate(true);
}


function logout()
{
    console.log("logout...");
    
    $("#loginDialog").hide();
    IoTize.Logout();

    // Resume update messages
    enableIoTizeUpdate(true);
}

//== IoTize callbacks functions ==
function onNotifyError(Id, coderet)
{
    if (coderet == -127) {
        displayError("Unauthorized command", coderet);
    }
    else if (Id == "/1024//0"){
        onNotifyLogin(coderet);
    }
    else{        
        displayError(Id, coderet);
    }
      
}

function onNotifyConnectStatus(status)
{
    if (status == 1)
    {
        if (count_timeout == 0)
            $('#IoTizeStatus').text("ok");
        else
            count_timeout = count_timeout - 1;
    }
    else
    {
        $('#IoTizeStatus').text("(disconnected!)");
    }
}


function onNotifySetVar(id, coderet)
{
    if ( coderet == 0 )
    {
        $('#IoTizeStatus').text("Variable(" + id + ") modified.");
        count_timeout = 1;
    }
    else
    {
        displayError("onNotifySetVar(" + id + ")", coderet);
    }

}

function onNotifyGetIoTizeLocalPublicPwd(coderet, value)
{
    console.log("onNotifyGetIoTizeLocalPublicPwd: " + value);

    if ( coderet == 0 )
    {
        PublicPwd = value;
    }
    else
        displayError("onNotifyGetIoTizeLocalPublicPwd", coderet);
}

function onNotifyGetHostProtocols(coderet, value)
{
    console.log("onNotifyGetHostProtocols: " + value);

    if ( coderet == 0 )
    {
        var tmp = "???";

        if (value & 0x0001)
            tmp = "( NFC";

        if (value & 0x0002)
            tmp += ", BT";

        if (value & 0x0020)
            tmp += ", WiFi";

        if (value & 0x0040)
            tmp += ", BLE )";

        $('#HostProtocols').text(tmp);
    }
    else
        displayError("onNotifyGetHostProtocols", coderet);
}

function onNotifyGetTargetProtocols(coderet, value)
{
    console.log("onNotifyGetTargetProtocols: " + value);

    if ( coderet == 0 )
    {
        var tmp = "???";

        if (value & 0x01)
            tmp = "SWD";

        if (value & 0x02)
            tmp += ", S3P";

        if (value & 0x04)
            tmp += ", JTAG";

        if (value & 0x08)
            tmp += ", Modbus";

        $('#TargetProtocols').text(tmp);
    }
    else
        displayError("onNotifyGetTargetProtocols", coderet);
}

function onNotifyGetCurrentHostProtocol(coderet, value)
{
    console.log("onNotifyGetCurrentHostProtocol: " + value);

    if ( coderet == 0 )
    {
        var tmp = "???";

        if (value & 0x0001)
            tmp = "NFC";

        if (value & 0x0002)
            tmp = "BT";

        if (value & 0x0020)
            tmp = "WiFi";

        if (value & 0x0040)
            tmp = "BLE";

        $('#CurHostProtocol').text(tmp);
    }
    else
        displayError("onNotifyGetCurrentHostProtocol", coderet);
}

function onNotifyGetCurrentTargetProtocol(coderet, value)
{
    console.log("onNotifyGetCurrentTargetProtocol: " + value);

    if ( coderet == 0 )
    {
        var tmp = "???";

        if (value == 0)
            tmp = "SWD";

        if (value == 1)
            tmp = "S3P";

        if (value == 2)
            tmp = "JTAG";

        if (value == 3)
            tmp = "Modbus";

        $('#CurTargetProtocol').text(tmp);
    }
    else
        displayError("onNotifyGetCurrentTargetProtocol", coderet);
}

function onNotifyLogin(coderet)
{
     if ( coderet != 0 ){
       
        var textMessage = "Login Unknown Error";
        var hexaCode = "";
    
        if (coderet == -93) {
    
            hexaCode = "0xA3";
            textMessage = "Login temporary unavailable!";
        
        } else if (coderet == -122) {
    
            hexaCode = "0x86";
            textMessage = "Wrong Login/Password";
        
        } else {
    
            hexaCode = coderet;
            textMessage = "Identifier or password incorrect!";
        
        }
     
        displayError(textMessage, hexaCode );
    }
    else 
        {
            
            IoTize.GetCurrentProfileID();        
        }
}

function onNotifyLogout(coderet)
{
    if ( coderet != 0 )
        displayError("Logout failed", coderet );

    IoTize.GetCurrentProfileID();
}

function onNotifyGetCurrentProfileID(coderet, value) {
    if (coderet == 0) {
        if (value == 0) {
            if ( window.location.pathname.indexOf(SN_Module + ".html") == -1 )
            {
                window.open(SN_Module + ".html", "_self");                
            }
        }
        else 
        {
            if ( window.location.pathname.indexOf(SN_Module + "." + value + ".html") == -1 )
            {
                window.open(SN_Module + "." + value + ".html", "_self");                
            }
        }
    }
    else if (coderet) {
        displayError("onNotifyGetCurrentProfileID", coderet);
    }
}

function onNotifyTargetConnect(coderet)
{
    if ( coderet != 0 )
        displayError("onNotifyTargetConnect", coderet);
}

function onNotifyGetProfileName(coderet, name)
{
    console.log("onNotifyGetProfileName: " + name);

    if ( coderet == 0 )
        $('#CurrentProfile').text(name);
    else
        displayError("onNotifyGetProfileName", coderet);
}

//== Miscellaneous functions ==

function convert2float(val)
{
    var bits = 1 * val;
    var sign     = ((bits & 0x80000000) == 0) ? 1 : -1;
    var exponent = ((bits & 0x7f800000) >> 23);
    var mantissa =  (bits & 0x007fffff);

    mantissa |= 0x00800000;
    var f = 1.0 * (sign * mantissa * Math.pow(2, exponent-150));

    return f;
}

function convert2unsigned (val, size)
{
    if (size == 32){
        return  (val >>> 0);
    } else if (size == 16) {
        return ( val & 0xFFFF);
    } else if (size == 8) {
        return ( val & 0xFF);
    } else {
        return val;
    } 
}
