/******************************************************************************
*
*        ________
*    __ /    _  _|
*   /_//  _  \\ \
*   |_|| | | || |   ____  _     Copyright (c) IoTize 2017
*   | || |_| || | |   /  / \    http://www.iotize.com
*   \ \\     // / |  /   |--
*    \_\\___//_/  | /___ \__
*
*
********************************************************************************
*@file          : clock.js
*@author        : IOTIZE
*@version       : $Id: clock.js 5904 2017-11-28 13:45:22Z yves.ragot $
*@brief         : Java Script management of clock demo with IoTize module.
*
*   THIS SOFTWARE IS PROVIDED BY THE IOTIZE DEVELOPMENT TEAM ``AS IS'' 
* AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
* THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
* PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE IOTIZE' DEVELOPMENT TEAM
* OR ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS,
* OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
* WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*******************************************************************************/

var refreshStatus = true;
var count_timeout = 0;
var ret = 0;
var d;
var hours;
var minutes;
var seconds;

window.onload = registerVars;

$(document).ready(function()
{
    // var timer = setInterval("updateTime()", 1000);
    
    // clockpicker management
    $('.clockpicker').clockpicker().find('input').change(function()
        {
            console.log(this.value);
            setTime(this.value);
        });

    var input = $('#single-input').clockpicker();
   
    // login dialog managment
    $('#login-button').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
    
    $("#login-button").click(function (e)
    {
        e.preventDefault();

        //hold on update messages
        enableIoTizeUpdate(false);
    });

});

function displayError(text, code)
{
    $('#IoTizeStatus').text("Error(" + code + "): " + text);
    count_timeout = 2;
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

// IoTize variables register
function registerVars()
{
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    updateTime();
    ret = 0;
    
    //IoTize.UnRegisterAll();

    if (typeof IoTize != "undefined")
    {    
        // Variables of bundle: Main public variables
        IoTize.RegisterComVar(7, 1, 3, 3);
        IoTize.RegisterVar( "sTimeGet.Hours", 7, 0);
        IoTize.RegisterVar( "sTimeGet.Minutes", 7, 1);
        IoTize.RegisterVar( "sTimeGet.Seconds", 7, 2);
        
        // Variables of bundle: Setup
        IoTize.RegisterComVar(2, 3, 1, 0);
        IoTize.RegisterVar( "iFlagSetup", 2, 0);
        
        IoTize.RegisterComVar(3, 1, 1, 0);
        IoTize.RegisterVar( "sTimeSetup.Hours", 3, 0);
        
        IoTize.RegisterComVar(4, 1, 1, 0);
        IoTize.RegisterVar( "sTimeSetup.Minutes", 4, 0);
        
        IoTize.RegisterComVar(5, 1, 1, 0);
        IoTize.RegisterVar( "sTimeSetup.Seconds", 5, 0);
        
        IoTize.RegisterComVar(6, 3, 1, 0);
        IoTize.RegisterVar( "iFlagTransfer", 6, 0);
        
        // Get device info
        IoTize.GetIoTizeSerialNumber();
        IoTize.GetHostProtocols();
        IoTize.GetTargetProtocols();
        IoTize.GetCurrentHostProtocol();
        IoTize.GetCurrentTargetProtocol();

    }
}

//== IoTize commands functions ==
function login()
{
    console.log("login: "+ $('#username').val() + "/" + $('#password').val());
    
    IoTize.Login($('#username').val(), $('#password').val());
    
    $('#password').val("");
    
    // Resume update messages
    enableIoTizeUpdate(true);
}

function logout()
{
    console.log("logout...");
    
    IoTize.Logout();
    
    // Resume update messages
    enableIoTizeUpdate(true);
}

function submit_iFlagSetup(value)
{
    IoTize.SetVar(2, value);
}

function submit_sTimeSetup_Hours(hours)
{
    IoTize.SetVar(3, hours);
}

function submit_sTimeSetup_Minutes(minutes)
{
    IoTize.SetVar(4, minutes);
}

function submit_sTimeSetup_Seconds(seconds)
{
    IoTize.SetVar(5, seconds);
}

function submit_iFlagTransfer(value)
{
    IoTize.SetVar(6, value);
}

//== IoTize callbacks functions ==
function onNotifyError(Id, coderet)
{
    displayError(Id, coderet);   
}

function onNotifyGetVar(name, coderet, num)
{
    if (coderet == 0)
    {
        if (name == "sTimeGet.Hours")
            hours = num;

        if (name == "sTimeGet.Minutes")
            minutes = num;

        if (name == "sTimeGet.Seconds")
            seconds = num;

        //console.log("onNotifyGetVar: " + name + " = " + num);

        updateTime();
    }
    else
    {
        displayError("onNotifyGetVar(" + name + ")", coderet);
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

function onNotifyLogin(coderet)
{
    if ( coderet != 0 )
        displayError("Login failed", coderet );
}

function onNotifyLogout(coderet)
{
    if ( coderet != 0 )
        displayError("Logout failed", coderet );
}

function onNotifyGetCurrentProfileID(coderet,value)
{
    if ( coderet != 0 )
        displayError("onNotifyGetCurrentProfileID", coderet );
}

function onNotifyGetIoTizeSerialNumber(coderet, value)
{
    console.log("onNotifyGetIoTizeSerialNumber: " + value);

    if ( coderet == 0 )
        $("#IoTize_SN").text(value);
    else
        displayError("onNotifyGetIoTizeSerialNumber", coderet);
}

function onNotifyGetHostProtocols(coderet, value)
{
    console.log("onNotifyGetHostProtocols: " + value);

    if ( coderet == 0 )
    {
        var tmp = "";
        
        if (value & 0x0001)
            tmp = "NFC";

        if (value & 0x0002)
            tmp += ", BT";

        if (value & 0x0020)
            tmp += ", WiFi";

        if (value & 0x0040)
            tmp += ", BLE";
        
        $('#HostProtocols').text(tmp);
    }
    else
        displayError("onNotifyGetHostProtocols", coderet);
}

function onNotifyGetCurrentHostProtocol(coderet, value)
{
    console.log("onNotifyGetCurrentHostProtocol: " + value);

    if ( coderet == 0 )
    {
        var tmp = "";
        
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

function onNotifyGetTargetProtocols(coderet, value)
{
    console.log("onNotifyGetTargetProtocols: " + value);

    if ( coderet == 0 )
    {
        var tmp = "";
        
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

function onNotifyGetCurrentTargetProtocol(coderet, value)
{
    console.log("onNotifyGetCurrentTargetProtocol: " + value);

    if ( coderet == 0 )
    {
        var tmp = "";
        
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

function onNotifyTargetConnect(coderet)
{
    if ( coderet != 0 )
        displayError("onNotifyTargetConnect", coderet);
}

// Update clock when time change
function updateTime()
{
    var hourRotate;
    var minRotate;
    var secRotate;
    
    //console.log("updateTime: " + hours + " : " + minutes + ":" + seconds);

    hours = ((hours > 12) ? hours - 12 : hours);
    
    if (minutes === 0)
        minRotate = 0;
    else
        minRotate = minutes * 6;
    
    if (seconds === 0)
        secRotate = 0;
    else
        secRotate = seconds * 6;
    
    if (hours === 12)
        hourRotate = 0;
    else
        hourRotate = (hours * 30) + (minutes / 2) ;

    var srotate = "rotate(" + secRotate + "deg)";
    $("#sechand").css({"-moz-transform" : srotate, "-webkit-transform" : srotate, "transform" : srotate});
    
    var hrotate = "rotate(" + hourRotate + "deg)";
    $("#hourhand").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate, "transform" : hrotate});
    
    var mrotate = "rotate(" + minRotate + "deg)";
    $("#minhand").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate, "transform" : mrotate});
}

// Set new user time
function setTime(time)
{
    var setHours = time.substring(0,2);
    var setMinutes = time.substring(3,5);
    var setSeconds = "0";
    
    console.log("setTime: " + setHours + ":" + setMinutes + ":" + setSeconds);

    submit_iFlagSetup("1");
    submit_sTimeSetup_Hours(setHours);
    submit_sTimeSetup_Minutes(setMinutes);
    submit_sTimeSetup_Seconds(setSeconds);
    submit_iFlagTransfer("1");
    submit_iFlagSetup("0");
    
    // Resume update messages
    enableIoTizeUpdate(true);
}
