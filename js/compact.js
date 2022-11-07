const clicksound = new Audio('click.mp3');

fetch('https://script.google.com/macros/s/AKfycbwpTWEeLHdIQisqXL_dpF9NgQExZ9DAJhg79HGqHDJjDd-Y0bPs3duQf7ERBVUooPKo/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(datas => {
    // console.log(data[0]);
    let length = datas.length;
    let j1=0;
    let j2=0;
    let j3=0;


    let data=[];
    let data1 = [];
    let data2 = [];
    let data3 = [];


    for(var i=0;i<length;i++){
        if(datas[i].tier==4){
            data[0]=datas[i];
        }
    }

    for(var i=0;i<length;i++){
        if(datas[i].Stock=="✅" && datas[i].tier==1){
            data1[j1]=datas[i];
            j1++;
        }
        if(datas[i].Stock=="✅" && datas[i].tier==2){
            data2[j2]=datas[i];
            j2++;
        }
        if(datas[i].Stock=="✅" && datas[i].tier==3){
            data3[j3]=datas[i];
            j3++;
        }
    }

    
    const html = data.map((img, i) =>{
        return `
        <div class="container px-4 px-lg-5 my-5" >
                <div class="row gx-4 gx-lg-5 align-items-center">
                
                    <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0" style="border-radius:25px" src="${data[0].Picture}" alt="${data[0].Car_made}.png" /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SCODE: ${data[0].SpawnCode}</div>
                        <h1 class="display-5 fw-bolder">${data[0].Car_made} ${data[0].Model_Name}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">₹ ${(data[0].Price)+500}</span>
                            <span>₹ ${data[0].Price}</span>
                        </div>
                        <p class="lead">
                        <u><B class="fw-bolder">Limited Time Only!</B></u> Grab <b>${data[0].Car_made} ${data[0].Model_Name}</b>
                         With Seating Capacity of <i class="fa-solid fa-chair"></i> <b>${data[0].Capacity}</b> Players
                          At a Limited Sale Price of <b>₹ ${data[0].Price}</b></p>
                    </div>
                </div>
            </div>`;
    }).join('');
    document.querySelector("#limited").insertAdjacentHTML("afterbegin", html);

    const html1 = data1.map((img, i) =>{
        return `
        <div class="col mb-5" onclick="clicksound.play();">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${data1[i].Picture}" alt="${data1[i].Car_made}.png" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${data1[i].Car_made} ${data1[i].Model_Name}</h5>
                                    <!-- Product price-->
                                    <i class="fa-solid fa-chair"></i> ${data1[i].Capacity}<br>
                                    <span class="text-decoration-line-through">₹ ${(data1[i].Price)+500}</span>
                                    <b>₹ ${data1[i].Price}</b><br>
                                    ${data1[i].SpawnCode}
                                </div>
                            </div>
                        </div>
                    </div>`
    }).join('');
    document.querySelector("#one").insertAdjacentHTML("afterbegin", html1);

    const html2 = data2.map((img, i) =>{
        return `
        <div class="col mb-5" onclick="clicksound.play();">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${data2[i].Picture}" alt="${data2[i].Car_made}.png" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <i class="fa-solid fa-chair"></i> ${data2[i].Capacity}<br>
                                    <h5 class="fw-bolder">${data2[i].Car_made} ${data2[i].Model_Name}</h5>
                                    <!-- Product price-->
                                    <span class="text-decoration-line-through">₹ ${(data2[i].Price)+500}</span>
                                    <b>₹ ${data2[i].Price}</b><br>
                                    ${data2[i].SpawnCode}
                                </div>
                            </div>
                        </div>
                    </div>`
    }).join('');
    document.querySelector("#two").insertAdjacentHTML("afterbegin", html2);

    const html3 = data3.map((img, i) =>{
        return `
        <div class="col mb-5" onclick="clicksound.play();">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${data3[i].Picture}" alt="${data3[i].Car_made}.png" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <i class="fa-solid fa-chair"></i> ${data3[i].Capacity}<br>
                                    <h5 class="fw-bolder">${data3[i].Car_made} ${data3[i].Model_Name}</h5>
                                    <!-- Product price-->
                                    <span class="text-decoration-line-through">₹ ${(data3[i].Price)+500}</span>
                                    <b>₹ ${data3[i].Price}</b><br>
                                    ${data3[i].SpawnCode}
                                </div>
                            </div>
                        </div>
                    </div>`
    }).join('');
    document.querySelector("#three").insertAdjacentHTML("afterbegin", html3);
})

