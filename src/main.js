
let hashMap = [
    { logo: 'A', url: 'https://www.acfun.cn' },
    { logo: 'B', url: 'https://www.bilibili.com' }
]

let $siteList = $('a:not(#addSite)').remove()
console.log($siteList)
$('#addSite').on('click', () => {
    let inputUrl = window.prompt('Please enter site\'s url：')
    if (inputUrl.indexOf('http') !== 0) {
        inputUrl = 'https://' + inputUrl
        let start = inputUrl.indexOf('/') + 2
        let iconText = (inputUrl.slice(start, start + 1)).toUpperCase()
        console.log(iconText)
        let newSite = $(`<a href="${inputUrl}">
        <li>
            <div class="site">
                <div class='icon-wrapper'>
                    ${iconText}
                </div>
                <div class="link">
                    ${inputUrl}
                </div>
            </div>
        </li>
        </a>`).insertBefore($('#addSite'))
    }

})