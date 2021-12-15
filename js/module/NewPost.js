function NewPost(T,P){
    var div = document.createElement('div')
    var h1 = document.createElement('h1')
    var p = document.createElement('p')
    div.className="PostDiv"
    h1.innerHTML=T
    p.innerHTML=P
    div.append(h1,p)
    document.querySelector('.post').append(div)
}
export default NewPost