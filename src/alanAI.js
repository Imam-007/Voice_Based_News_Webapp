intent(' $(item* (.*))',(p) => {
    if(p.item.value==='General' || p.item.value==='general' || p.item.value==='Health'|| p.item.value==='help' || p.item.value==='health'|| p.item.value==='Business' || p.item.value==='business' || p.item.value==='Sports' || p.item.value==='sports'){
        p.play({command: 'VoiceNews' , data: p.item.value});
        p.play(`Fetching News on ${p.item.value} Category`);
    }
    else{
        p.play(`Can not get Data`);
    }
})
