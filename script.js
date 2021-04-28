const getValue = () => {
    return document.getElementsByTagName('video')[0].playbackRate;
}

const slowRate = () => {
    document.getElementsByTagName('video')[0].playbackRate -= 0.25;
}

const fastRate = () => {
    document.getElementsByTagName('video')[0].playbackRate += 0.25;
}

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.executeScript({
        code: '(' + getValue + ')();'
    }, (speed) => {
        document.getElementsByTagName('input')[0].value = speed;
    })
})

document.getElementById('forward').addEventListener('click', () => {
    chrome.tabs.executeScript({
        code: '(' + fastRate + ')();'
    });
    chrome.tabs.executeScript({
        code: '(' + getValue + ')();'
    }, (speed) => {
        document.getElementsByTagName('input')[0].value = speed;
    })
})

document.getElementById('rewind').addEventListener('click', () => {
    chrome.tabs.executeScript({
        code: '(' + slowRate + ')();'
    });
    chrome.tabs.executeScript({
        code: '(' + getValue + ')();'
    }, (speed) => {
        document.getElementsByTagName('input')[0].value = speed;
    })
})
