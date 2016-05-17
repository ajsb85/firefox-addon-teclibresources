const { PanelView } = require("jetpack-panelview");
const { ToggleButton } = require('sdk/ui');
const workaround = require("jetpack-panelview/lib/panelview/workaround");
var tabs = require("sdk/tabs");
const name = "lightweightThemes.selectedThemeID";
const selectedThemeID = require("sdk/preferences/service").get(name);

var pv = PanelView({
        id: 'teclib-panelview',
        title: "Teclib'",
        content: [
          {
              type: 'button',
              label: 'Email',
              onClick: function(event) {
                  tabs.open("https://mail.teclib.com/");
              }
          },
          {
              type: 'button',
              label: 'Jabber',
              onClick: function(event) {
                  tabs.open("https://jabber.teclib.com/");
              }
          },
          {
              type: 'button',
              label: 'Wiki',
              onClick: function(event) {
                  tabs.open("http://wiki.teclib.infra/xwiki/bin/view/Main/WebHome");
              }
          },
          {
              type: 'button',
              label: 'SGD',
              onClick: function(event) {
                  tabs.open("https://sgdgateway.teclib.com/");
              }
          },
          {
              type: 'button',
              label: 'GED',
              onClick: function(event) {
                  tabs.open("http://ged.teclib.infra/");
              }
          },
          {
              type: 'button',
              label: 'ODOO',
              onClick: function(event) {
                  tabs.open("http://odoo.teclib.infra/");
              }
          },
          {
              type: 'button',
              label: 'ERP',
              onClick: function(event) {
                  tabs.open("http://erp.teclib.infra/");
              }
          },
          {
              type: 'button',
              label: 'Support',
              onClick: function(event) {
                  tabs.open("http://support.teclib.com/");
              }
          },
          {
              type: 'button',
              label: 'Share',
              onClick: function(event) {
                  tabs.open("https://share.teclib.net/");
              }
          },
          {
              type: 'button',
              label: 'Etherpad',
              onClick: function(event) {
                  tabs.open("http://etherpad.prod.teclib.infra:9001/");
              }
          },
          {
              type: 'button',
              label: 'Ethercalc',
              onClick: function(event) {
                  tabs.open("http://ethercalc.qualif.teclib.infra/");
              }
          },
          {
              type: 'button',
              label: 'Jitsi',
              onClick: function(event) {
                  tabs.open("https://visio.teclib.com/");
              }
          }
        ],
        footer: {
            label: 'Web Site',
            onClick: function(event) {
                tabs.open("http://www.teclib-edition.com/");
            }
        }
    });


const button = ToggleButton({
  id: "teclib-button",
  label: "Teclib'",
  icon: {
    "16": selectedThemeID === "firefox-devedition@mozilla.org" ?
      "./icon-16.dev.svg" : "./icon-16.svg",
    "32": "./icon-32.svg",
    "64": "./icon-64.svg"
  },
    onClick(state){
        if(state.checked) {
            pv.show(button);
        }
    }
});

// Uncheck the button if the panel is hidden by loosing focus
pv.on("hide", () => {
    button.state("window", {checked: false});
});

// Don't close the menu panel or overflow panel when the button is clicked.
workaround.applyButtonFix(button);
