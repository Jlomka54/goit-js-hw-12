export const createGalerryCard = imgInfo => {
    return `<li class="galerry-item">
    <a href="${imgInfo.largeImageURL}" ><img class="gallery-item-img" alt='${imgInfo.tags}' src='${imgInfo.webformatURL}'></img></a>
     <ul class="photo-info-list">
    <li class="photo-info-item">
        <h4>Likes</h4>
        <p class="photo-paragraph">${imgInfo.likes}</p>
</li>
    <li class="photo-info-item">
         <h4>Views</h4>
        <p class="photo-paragraph">${imgInfo.views}</p>
    </li>
    <li class="photo-info-item">
         <h4>Commenst</h4>
        <p class="photo-paragraph">${imgInfo.comments}</p>
    </li>
    <li class="photo-info-item">
        <h4>Downloads</h4>
        <p class="photo-paragraph">${imgInfo.downloads}</p>
</li>
</ul> 
</li>`
}
