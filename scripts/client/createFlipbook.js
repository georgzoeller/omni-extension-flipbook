
const script = {

  exec(args){

    let images = [];
      window.client.chat.state.messages.forEach((msg) => {
        if (msg.attachments && msg.images && msg.images.length > 0) {
          images= images.concat(msg.images.map((img) => {
            return img.url
          }))
        }
      })

      window.open(`./extensions/omni-extension-flipbook/?images=${encodeURIComponent(JSON.stringify(images))}`, '_blank', 'popup=1,toolbar=0,location=0,menubar=0');


      return {response: "ok"};
  }
}