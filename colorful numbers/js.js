function food(input) {
    let num = Number(input[0]);

    let html = '<ul>';

    for (let i = 1; i <= num; i++) {
        let li1 = '<li><span style="color: blue">1</span></li>\n';
        let li2 = '<li><span style="color: red">2</span></li>\n';

        if(i % 2 == 0) {
          html += li1;
        }else if(i % 2 != 0){
            html += li2;
        }
        html += '</ul>';

    }
    document.write(html);
}

food(['20']);