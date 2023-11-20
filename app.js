const input = document.querySelector('#input');
const $imgArea = $('#img');

$('form').on('submit', async function(e) {
    e.preventDefault();
    const inputVal = input.value;
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: inputVal,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    }
    )
    selectOne(res.data);
    inputVal = '';
}
)

function selectOne(res){
    
    const numOfImgs = res.data.length;
    const dataIdx = Math.floor(Math.random()*numOfImgs);
    const $div = $('<div>', {class: 'newDiv'})
    const $img = $('<img>', {
        src: res.data[dataIdx].images.original.url,
        class: 'newImg'
    })
    $div.append($img);
    $imgArea.append($div);
}

$('#remove').on('click', function(){
    $imgArea.empty();
})