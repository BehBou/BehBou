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

              
//== IoTize callbacks functions ==

function checkTargetConfigVersion(coderet, value)
{
    if ( value != config_version )
        displayError("Tap config (" + value + ")  does not match with the expected version ("+ config_version + ")", 1);
}

function hideError()
{
    $("#Iotize_Alert").hide();
}

function setVariableValue(variableId, value, index){
    if (Array.isArray(value)){
        for (let index = 0; index < value.length; index++){
            $('.variable-value-' + variableId + "-" + index).text(value[index]);
        }
    }
    else{
        $('.variable-value-' + variableId + "-" + (index || 0)).text(value);
    }
}

function setBundleError(cardId, value){
    let bundleErrorBlock = $(cardId + ' .alert-danger');
    setDivTextOrHide(bundleErrorBlock, value);
}

function setBundleInfo(cardId, value){
    let bundleErrorBlock = $(cardId + ' .alert-info');
    setDivTextOrHide(bundleErrorBlock, value);
}

function setDivTextOrHide(div, value){
    if (value){
        div.text(value);
        div.show();
    }
    else{
        div.hide();
    }
}

function displayError(text, code) {
    if (text) {
        $("#Error").text(text);
        $("#Iotize_Alert").show();
    }        
    console.log("Error(" + code + "): ", text);
    count_timeout = 2;
}

function showlogin()
{
    // Resume update messages
    toggleMonitoring(false);    
}

function hidelogin()
{
    // Resume update messages
    toggleMonitoring(true);    
}

// Used to hold on keyboard dialg boxes on some smartphones
function toggleMonitoring(toEnable)
{
    if (toEnable){
        startMonitoring();
    }
    else{
        pauseMonitoring();
    }
}

//== IoTize commands functions ==
function login()
{
    let login = $('#inputLogin').val();
    let password = $('#inputPassword').val();
    console.log("login: "+ login + "/" + password);
    device
        .login(login, password)
        .then(function() {
            $('#inputPassword').val("");
            $("#loginDialog").hide();    
            $.toast('Login successful!');
            updateProfileId()
                .then(() => {
                    toggleMonitoring(true);
                }) 
        })
        .catch((err) => {
            displayError(err);
            // Resume update messages
            toggleMonitoring(true);
        });
        
}

function updateProfileId(){
    return device.service.interface
        .getCurrentProfileId()
        .then((response) => {
            let id = response.body();
            openProfileIdPage(id);
        })                       
        .catch((err) => {
            displayError(err);
        })
}


function logout()
{
    console.log("logout...");
    $("#loginDialog").hide();
    device
        .logout()
        .then(function() {
            $.toast('Logout successful!');
            updateProfileId();
        })
        .catch((err) => {
            displayError(err, 0);
            updateProfileId();
        });
    // Resume update messages
    toggleMonitoring(true);
}

function submitVariableValue(variableId, variableName, index){
    let value;
    if ( $('.bundle .form-control-' + variableId).length === 1){
        let input = $('#input-' + variableId + "-" + index);
        value = input.val();
    }
    // Multiple values
    else {
        value = [];
        $('.bundle .form-control-' + variableId).each(function(){
            value.push($(this).val());
        });
    }
    console.log('Set variable ' + variableName + ' value to ' + value);
    return variableManager
        .get(variableName)
        .write(value)
        .then(() => {
            $.toast(variableName + ' successfully updated with value ' + value);
            setVariableValue(variableId, value, index);
        })
        .catch((err) => {
            $.toast({
                text: (err ? err: 'Cannot edit ' + variableName + ' error. '),
                hideAfter: 7000
            });
        });
}

function openProfileIdPage(value) {
    let pageUrl = `${SN_Module}.${value}.html`;
    $('#pagecontent').load(pageUrl);
}

function readInfos(){
    setPromiseValue("HostProtocol", device.service.interface.getCurrentHostProtocol());
    setPromiseValue("SerialNumber", device.service.device.getSerialNumber());
    setPromiseValue("ConfigVersion", device.service.interface.getConfigFormatFirmwareVersion());
}

function setPromiseValue(id, promise){
    return promise
        .then(function (response) {
            setValue(id, response.body());
        })
        .catch(function (err) {
            setValue(id, err);
        });
}

function setValue(divId, value){
    $('#' + divId).text(value);
}

function toPrecision(value, precision){
    let factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
}