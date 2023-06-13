function createScript()
{
  return {
    description: "Create a flipbook from the current chat",
    title: "Create Flipboard",
    exec(args){

      let images = [];
        window.client.chat.state.messages.forEach((msg) => {
          if (msg.attachments && msg.images && msg.images.length > 0) {
            images= images.concat(msg.images.map((img) => {
              return img.url
            }))
          }
        })
        window.client.workbench.activeExtensionUrl=`./extensions/omni-extension-flipbook/?images=${encodeURIComponent(JSON.stringify(images))}`;
        window.client.workbench.activeScreen= "extensions";
        //window.open(`./extensions/omni-extension-flipbook/?images=${encodeURIComponent(JSON.stringify(images))}`, '_blank', 'popup=1,toolbar=0,location=0,menubar=0');
        window.client.sendSystemMessage(`Flipbook created, please check the extensions tab`, "text/markdown",
        {
          commands:
          [
            {
              title: 'Show Flipbook',
              id: 'toggleExtensions',
              args: []
            }
          ]
        });
        return {response: "ok"};
    }
  }
}

