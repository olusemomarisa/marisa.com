/* Light YouTube Embeds by @labnol */
/* Adapted for this site */

document.addEventListener("DOMContentLoaded", function() {
  var v = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < v.length; n++) {
    var div = document.createElement("div");
    var id = v[n].dataset.id;
    div.setAttribute("data-id", id);
    div.innerHTML = labnolThumb(id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});

function labnolThumb(id) {
  var thumb = '<img alt="YouTube thumbnail" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play" aria-hidden="true"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("title", "YouTube video player");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}
