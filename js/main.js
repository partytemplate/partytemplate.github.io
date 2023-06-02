$(function () {
  $("#wizard").steps({
    headerTag: "h4",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    titleTemplate: '<span class="number">#index#</span>',
    //labels: {
    //current: "",
    //finish: "Submit",
    //next: "Next",
    //previous: "Previous",
    // },
    onStepChanging: function (event, currentIndex, newIndex) {

      

      if (newIndex >= 1) {
        $(".steps ul li:first-child a .step-arrow").remove();
      } else {
        $(".steps ul li:first-child a").append(
          '<img src="images/step-arrow.png" alt="" class="step-arrow">'
        );
      }
      if (newIndex === 1) {
        $(".steps ul li:nth-child(2) a").append(
          '<img src="images/step-arrow.png" alt="" class="step-arrow">'
        );
      } else {
        $(".steps ul li:nth-child(2) a .step-arrow").remove();
      }
      if (newIndex === 2) {
        $(".steps ul li:nth-child(3) a").append(
          '<img src="images/step-arrow.png" alt="" class="step-arrow">'
        );
        var email = $("#emailinput").val();
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
          // ok
          return true;
        } else {
          // alert("Please input your email");
          // return false;
          // todo: change this if I want them not to go on without a code
          return true;
        }
      } else {
        $(".steps ul li:nth-child(3) a .step-arrow").remove();
      }
      if (newIndex === 3) {
        
        $(".steps ul li:nth-child(4) a").append(
          '<img src="images/step-arrow.png" alt="" class="step-arrow">'
        );
      } else {
        $(".steps ul li:nth-child(4) a .step-arrow").remove();
      }
      if (newIndex === 4) {
        $(".steps ul li:nth-child(5) a").append(
          '<img src="images/step-arrow.png" alt="" class="step-arrow">'
        );
      } else {
        
        $(".steps ul li:nth-child(5) a .step-arrow").remove();
      }
      changeDefaultSection();
      return true;
    },
  });
  $(".steps ul li:first-child a")
    .append('<img src="images/step-1.png" alt="">')
    .append('<img src="images/step-arrow.png" alt="" class="step-arrow">');
  $(".steps ul li:nth-child(2) a").append(
    '<img src="images/step-2.png" alt="">'
  );
  $(".steps ul li:nth-child(3) a").append(
    '<img src="images/step-3.png" alt="">'
  );
  $(".steps ul li:nth-child(4) a").append(
    '<img src="images/step-4.png" alt="">'
  );
  $(".steps ul li:last-child a").append('<img src="images/step-5.png" alt="">');
});

var flag =0;

function changeDefaultSection() {

  if(flag ==0)
   flag = 10;
  else return true;

  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();


  if (currentHour >= 20) {
    $("#wizard-p-2").append("<div class='info'><div class='info-item'><div class='info-item'> Please have a look at the map provided and find the secret spots where your enigma awaits...                In every spot we have hidden an envelope, marked with each of the groups numbers.                Each group needs to select 2-3 people who will be responsible for finding your corresponding envelope                 (please do not get other groups envelopes and if you find one that is not yours, leave it where you found it).                Once you have it, go back to your group and if you dare, try to solve it... When you have the solution,                look for the organizers in the main terrace.                 The first team to solve the enigma will receive an award!!                 Come back to this webpage later for more activities to come!            </div>                   </div>    </div>    <img src='images/final_gymkana.jpeg' >");

  } else {
    $("#wizard-p-2").append("<div class='info'>  <div class='info-item'>      <div class='info-item'>        Get ready for an exciting evening! This section will come to life at 8pm...stay tuned!        </div>      </div></div>");
  }

  if (currentHour >= 20 && currentMinutes >= 30) {
    $("#wizard-p-3").append("<div class='info'>    <div class='info-item'>    <div class='info-item'>        Please visit the following webpage using the link provided. Introduce the code provided by the organizers.             This is an online Quizz and everyone is invited to participate.              Show your skills in answering difficult questions. The winner will receive a special gift :) !!!             Come back to the webpage later for more activities to come ! :))         </div>        <div class='social'>    </a>    <a class='unit'>Quiz Link:</span>    <a href='https://quizizz.com/join'>       <i class='lnr lnr-earth'></i>    </a>                </div></div>");
  } else {
    $("#wizard-p-3").append("<div class='info'> <div class='info-item'>      <div class='info-item'>     Get ready for an exciting evening! This section will come to life at 8:30pm...stay tuned!         </div>       </div></div>");
  }



  if (currentHour >= 21 &&  currentMinutes >= 30) {
    $("#wizard-p-4").append("<div class='info'>    <div class='info-item'>     <div class='info-item'>      Please, join your team fellows and go to the central terrace. Select small teams or get all together to the main stage and participate in the karaoke. Winners will be selected by general election and will receive a gift!!            And do not leave yet!! We will see all pictures taken during the event after the karaoke!                  </div>    </div></div>");
  } else {
    $("#wizard-p-4").append(" <div class='info'> <div class='info-item'>    <div class='info-item'>    Get ready for an exciting evening! This section will come to life at 9:30pm...stay tuned!        </div>      </div></div>");
  }
}

function md5(d) {
  return rstr2hex(binl2rstr(binl_md5(rstr2binl(d), 8 * d.length)));
}
function rstr2hex(d) {
  for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
    (_ = d.charCodeAt(r)), (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
  return f;
}
function rstr2binl(d) {
  for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
  for (m = 0; m < 8 * d.length; m += 8)
    _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
  return _;
}
function binl2rstr(d) {
  for (var _ = "", m = 0; m < 32 * d.length; m += 8)
    _ += String.fromCharCode((d[m >> 5] >>> m % 32) & 255);
  return _;
}
function binl_md5(d, _) {
  (d[_ >> 5] |= 128 << _ % 32), (d[14 + (((_ + 64) >>> 9) << 4)] = _);
  for (
    var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0;
    n < d.length;
    n += 16
  ) {
    var h = m,
      t = f,
      g = r,
      e = i;
    (f = md5_ii(
      (f = md5_ii(
        (f = md5_ii(
          (f = md5_ii(
            (f = md5_hh(
              (f = md5_hh(
                (f = md5_hh(
                  (f = md5_hh(
                    (f = md5_gg(
                      (f = md5_gg(
                        (f = md5_gg(
                          (f = md5_gg(
                            (f = md5_ff(
                              (f = md5_ff(
                                (f = md5_ff(
                                  (f = md5_ff(
                                    f,
                                    (r = md5_ff(
                                      r,
                                      (i = md5_ff(
                                        i,
                                        (m = md5_ff(
                                          m,
                                          f,
                                          r,
                                          i,
                                          d[n + 0],
                                          7,
                                          -680876936
                                        )),
                                        f,
                                        r,
                                        d[n + 1],
                                        12,
                                        -389564586
                                      )),
                                      m,
                                      f,
                                      d[n + 2],
                                      17,
                                      606105819
                                    )),
                                    i,
                                    m,
                                    d[n + 3],
                                    22,
                                    -1044525330
                                  )),
                                  (r = md5_ff(
                                    r,
                                    (i = md5_ff(
                                      i,
                                      (m = md5_ff(
                                        m,
                                        f,
                                        r,
                                        i,
                                        d[n + 4],
                                        7,
                                        -176418897
                                      )),
                                      f,
                                      r,
                                      d[n + 5],
                                      12,
                                      1200080426
                                    )),
                                    m,
                                    f,
                                    d[n + 6],
                                    17,
                                    -1473231341
                                  )),
                                  i,
                                  m,
                                  d[n + 7],
                                  22,
                                  -45705983
                                )),
                                (r = md5_ff(
                                  r,
                                  (i = md5_ff(
                                    i,
                                    (m = md5_ff(
                                      m,
                                      f,
                                      r,
                                      i,
                                      d[n + 8],
                                      7,
                                      1770035416
                                    )),
                                    f,
                                    r,
                                    d[n + 9],
                                    12,
                                    -1958414417
                                  )),
                                  m,
                                  f,
                                  d[n + 10],
                                  17,
                                  -42063
                                )),
                                i,
                                m,
                                d[n + 11],
                                22,
                                -1990404162
                              )),
                              (r = md5_ff(
                                r,
                                (i = md5_ff(
                                  i,
                                  (m = md5_ff(
                                    m,
                                    f,
                                    r,
                                    i,
                                    d[n + 12],
                                    7,
                                    1804603682
                                  )),
                                  f,
                                  r,
                                  d[n + 13],
                                  12,
                                  -40341101
                                )),
                                m,
                                f,
                                d[n + 14],
                                17,
                                -1502002290
                              )),
                              i,
                              m,
                              d[n + 15],
                              22,
                              1236535329
                            )),
                            (r = md5_gg(
                              r,
                              (i = md5_gg(
                                i,
                                (m = md5_gg(
                                  m,
                                  f,
                                  r,
                                  i,
                                  d[n + 1],
                                  5,
                                  -165796510
                                )),
                                f,
                                r,
                                d[n + 6],
                                9,
                                -1069501632
                              )),
                              m,
                              f,
                              d[n + 11],
                              14,
                              643717713
                            )),
                            i,
                            m,
                            d[n + 0],
                            20,
                            -373897302
                          )),
                          (r = md5_gg(
                            r,
                            (i = md5_gg(
                              i,
                              (m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691)),
                              f,
                              r,
                              d[n + 10],
                              9,
                              38016083
                            )),
                            m,
                            f,
                            d[n + 15],
                            14,
                            -660478335
                          )),
                          i,
                          m,
                          d[n + 4],
                          20,
                          -405537848
                        )),
                        (r = md5_gg(
                          r,
                          (i = md5_gg(
                            i,
                            (m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438)),
                            f,
                            r,
                            d[n + 14],
                            9,
                            -1019803690
                          )),
                          m,
                          f,
                          d[n + 3],
                          14,
                          -187363961
                        )),
                        i,
                        m,
                        d[n + 8],
                        20,
                        1163531501
                      )),
                      (r = md5_gg(
                        r,
                        (i = md5_gg(
                          i,
                          (m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467)),
                          f,
                          r,
                          d[n + 2],
                          9,
                          -51403784
                        )),
                        m,
                        f,
                        d[n + 7],
                        14,
                        1735328473
                      )),
                      i,
                      m,
                      d[n + 12],
                      20,
                      -1926607734
                    )),
                    (r = md5_hh(
                      r,
                      (i = md5_hh(
                        i,
                        (m = md5_hh(m, f, r, i, d[n + 5], 4, -378558)),
                        f,
                        r,
                        d[n + 8],
                        11,
                        -2022574463
                      )),
                      m,
                      f,
                      d[n + 11],
                      16,
                      1839030562
                    )),
                    i,
                    m,
                    d[n + 14],
                    23,
                    -35309556
                  )),
                  (r = md5_hh(
                    r,
                    (i = md5_hh(
                      i,
                      (m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060)),
                      f,
                      r,
                      d[n + 4],
                      11,
                      1272893353
                    )),
                    m,
                    f,
                    d[n + 7],
                    16,
                    -155497632
                  )),
                  i,
                  m,
                  d[n + 10],
                  23,
                  -1094730640
                )),
                (r = md5_hh(
                  r,
                  (i = md5_hh(
                    i,
                    (m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174)),
                    f,
                    r,
                    d[n + 0],
                    11,
                    -358537222
                  )),
                  m,
                  f,
                  d[n + 3],
                  16,
                  -722521979
                )),
                i,
                m,
                d[n + 6],
                23,
                76029189
              )),
              (r = md5_hh(
                r,
                (i = md5_hh(
                  i,
                  (m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487)),
                  f,
                  r,
                  d[n + 12],
                  11,
                  -421815835
                )),
                m,
                f,
                d[n + 15],
                16,
                530742520
              )),
              i,
              m,
              d[n + 2],
              23,
              -995338651
            )),
            (r = md5_ii(
              r,
              (i = md5_ii(
                i,
                (m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844)),
                f,
                r,
                d[n + 7],
                10,
                1126891415
              )),
              m,
              f,
              d[n + 14],
              15,
              -1416354905
            )),
            i,
            m,
            d[n + 5],
            21,
            -57434055
          )),
          (r = md5_ii(
            r,
            (i = md5_ii(
              i,
              (m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571)),
              f,
              r,
              d[n + 3],
              10,
              -1894986606
            )),
            m,
            f,
            d[n + 10],
            15,
            -1051523
          )),
          i,
          m,
          d[n + 1],
          21,
          -2054922799
        )),
        (r = md5_ii(
          r,
          (i = md5_ii(
            i,
            (m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359)),
            f,
            r,
            d[n + 15],
            10,
            -30611744
          )),
          m,
          f,
          d[n + 6],
          15,
          -1560198380
        )),
        i,
        m,
        d[n + 13],
        21,
        1309151649
      )),
      (r = md5_ii(
        r,
        (i = md5_ii(
          i,
          (m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070)),
          f,
          r,
          d[n + 11],
          10,
          -1120210379
        )),
        m,
        f,
        d[n + 2],
        15,
        718787259
      )),
      i,
      m,
      d[n + 9],
      21,
      -343485551
    )),
      (m = safe_add(m, h)),
      (f = safe_add(f, t)),
      (r = safe_add(r, g)),
      (i = safe_add(i, e));
  }
  return Array(m, f, r, i);
}
function md5_cmn(d, _, m, f, r, i) {
  return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}
function md5_ff(d, _, m, f, r, i, n) {
  return md5_cmn((_ & m) | (~_ & f), d, _, r, i, n);
}
function md5_gg(d, _, m, f, r, i, n) {
  return md5_cmn((_ & f) | (m & ~f), d, _, r, i, n);
}
function md5_hh(d, _, m, f, r, i, n) {
  return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}
function md5_ii(d, _, m, f, r, i, n) {
  return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}
function safe_add(d, _) {
  var m = (65535 & d) + (65535 & _);
  return (((d >> 16) + (_ >> 16) + (m >> 16)) << 16) | (65535 & m);
}
function bit_rol(d, _) {
  return (d << _) | (d >>> (32 - _));
}

$(document).ready(function () {
  $("#emailinput").change(function () {
    names = [
      "DD0A1A03A7F9EE2BF677E8A5D8030DAA",
      "4AAD4248520E467FA14A1B6F5A868950",
      "7B69783A24719F852796399D2BBF3662",
      "72B5527EBE9DAC0C2E8B1F32498F7C6D",
      "8AE7C495C528E4DFBA2B21C67598C80E",
      "49B3670A9EE6F58F5112700D3CA3F2A5",
      "F6F5A6EE37002894D39C59DD55B41E92",
      "E84141E61135EE4B1DF415B779B2ABBF",
      "AAB28B6B1C09ED8511EDC8D198733B48",
      "6E65C9CA7041FE0EB9D2FBA0417E57CF",
      "FBF7417DC9D12DFC40A8EBDC8B743C98",
      "CCA9A5CF7598DE7A66936AC49F23609F",
      "D887B8EAEC1B2CECBF110CDCD7BEAE67",
      "0DF14E3DC91C380A5D6D590784BE0780",
      "C064D71FD55E75258B7568550F6E9066",
      "60DC26AB4778AF5B95EE03461073E7B4",
      "9406E0410597ABAACCF5C34BA851A2DF",
      "7B4747AD124BEDC2F4100B3E36F697FE",
      "3729D42FC0FD06A92CD0ED852E9FBCE2",
      "1FD8A8BF44F4EF18FFED99BD29081EF9",
      "4FEDB6F4E1933D86FA2AD650EF107B45",
      "C7067450844B45EC294A3663DC44F324",
      "A505C7EBB3B1A9A84015BA8BA0083639",
      "531B28AABA7A0CFE37C3FDB6F9F1F503",
      "9810557958CF0179737A64BB3B4F57C5",
      "B751E4531F7381A50C6879011D91FBDA",
      "1F12A50A7269721D25DA4FA98775ED33",
      "8A02BC1B8A01B16E95C232B7E9AF3F65",
      "3DC6038FF821B0EF55542F455366A464",
      "FDCB0E791D2DE077A6F84187DAFA4127",
      "03F675D3F669F76879B6A79737AF2635",
      "F4F35A80663FDA4A43E619BAEE3FDC3D",
      "5275CE7AD76378EA05452FA4EA3BA318",
      "D01AA66D6654B1D31636FD5942507FF7",
      "C5CBB0C696337CBEFD791A8333C6AB08",
      "588E692468FDAED038D649520CC8E6B3",
      "5738191D258728977C4AADB814AB65D9",
      "491DAAC570215DD663AF7D5186FFE99B",
      "B19FE280A8416AF7847E6B4C0DFED973",
      "E9BF21897E35FEEC066DF1113A0CBED4",
      "5D256592D41708E03A2E5B94DE535024",
      "B313744EE54D7C422FA2AF4CC6B8B7CD",
      "1190DD8D7F30694CE3EEC529E6D995F1",
      "A6C30C96351C7D4FDF1F9E9A5F7AFFBA",
      "B987FBF8150D72ED837DB886E4F4DC5A",
      "734C3FEFA7A28C4F4CC33357D2D222A7",
      "BB54181106B1311788128CD5A3B1DBE9",
      "600577014318EBCA6BBE501C17EB85D1",
      "6C890A60392D3FB415A665B493FCC67B",
      "437D174A9DCC187EA11532BA14CD231E",
      "1174F3691E480CE2D36E24B6C0B82D42",
      "051A92EE8C5FE314D52CB3230DF555AF",
      "BF3163BB0CFC0B024279DAD30C764618",
      "B0D42B8BBD2C1EC679913780019C3993",
      "E2717FBCB41A2F672C2E82B1BE18C024",
      "CB80032E3EB96CE8D6F7A60D056F9EB8",
      "432FB711155A59ED10DF697DEA54FB1C",
      "4242813807E361BD680A220809A049B7",
      "C49CCBAA7B2F0B9DD5C6F619ACD8EDDD",
      "6BBBAF2351B8CC1143B10D33A0BFB430",
      "825FF38FA3A12A86CC162AEA4378C2AE",
      "B0E0335FA58A157A9D495F65524FE5FC",
      "C282601D3DBBE93AFD15386573934B49",
      "588E692468FDAED038D649520CC8E6B3",
      "F461A1FF89EC55FC384FFB1ADC0D269B",
      "1253140869DC0673A013A88BE0EAD116",
      "64739BA63D008DCD097FF70D512CEA80",
      "7245490469D1E4176402430C0A85B4B4",
      "ADC0B38C6D96F9C777439845C7849D74",
      "E372D3F46580A2F194333963EC6E26AC",
      "D887B8EAEC1B2CECBF110CDCD7BEAE67",
      "CB95CD8A22C12FCFDBF4C1D650710F09",
      "3BA1A05111F97AE2CC98A83550192CEC",
      "11AE79DE091CFAC8870F81E2787C577A",
      "45D83B8C1320947E2DD60C38371F4A86",
      "073B9FC55835EF91BF16FC760C0F11A2",
      "CD9B8506272028321A524C39F7EC246E",
      "963D6E0D2D4C0A9F38103D93718480AE",
      "A1B2F8857BC6EC89184A5017779576CA",
      "34BE473B16BF7BD873B0F0EC07D0D8BC",
      "47840E710534098B067BBBA00943489E",
      "454703B0A4B44A36406A81912CAABA2C",
      "529177482CAEB334A670067C1BE90B37",
      "850AB6A9015EAB250B3664D5A5C61E0B",
      "23003F010237A2B7027D719F0F2B34AB",
      "9AF138165083BC9A5D277E7D314D01A5",
      "F1550D3B05C494E655811C72ABC077B6",
      "B7B356050E8C0688B007DF6867AE7F27",
      "AA662D6DFE7C6E93876046DAED836C3E",
      "6FEEC286B4CEA3CBBB89C7D3E04CA18C",
      "A0D09DD29F5C31C045530606EA86244C",
      "AE5F2B27D07F3EF2516B2F24C71465E7",
      "404B10DA04BFFA54139FA59D0EF6B6F1",
      "23C4F0D5FB0468896090389E5E25DBEB",
      "408A4A4E749556D47DB8F7217CD81F6F",
      "49F8628EA1DE3AF031F19AF0FA4FAD86",
      "1E3AEB80769B5AB2A0F2DA5BF9402D0D",
      "B871C3AEC7280556DF0D30813AD5CF4C",
      "37A9EC01426ECA6B6C0AE3BCA09435CD",
      "BA2BA642D4F78A38A263FA37CE1EAFED",
      "A39DDCDB32D97088D73B64208962B1A1",
      "B49A63B92E966E424224CB80F6670F09",
      "F6F5A6EE37002894D39C59DD55B41E92",
      "F6FEC1AC45719D655CC903482F6515A0",
      "9E7712FC53A4C3A30FC4067BFBAE4C90",
      "859E0D44B42DF148F3C91D004C6C5D39",
      "40DE6093E8E3884C583873B987A1E55F",
      "86B4B508BC49064DD702F92A88DFE42B",
      "A4E93561DB03A8947BE2ABC90D0BD85C",
      "5A0FFD82654FF4E870CE83A773E0F668",
      "0A35E2C5CB6357CB8F3BC101BD241CF0",
      "9B32F292A9DCD0E41FF78DF15CE3E648",
      "353F6501D96AB9B4205416D535C41FCA",
      "60382053D1D4F3409CF945ECD0795C98",
      "E7AEAF5CCE777605955148DFC361EB85",
      "5FAF0ADE18526022382F0EC0C9562AEF",
      "BB0C8D138E36224B9E1A714E0CA02151",
      "DB218B68082C552D8544113A135DB809",
      "B858C779DCEA3B2D6989CE9467DE8F2F",
      "FB8CDB8F6A6BB0B10E69E5DB65138541",
      "8C0410A27EB2F23E79570898D10CF7F6",
      "3AD75F679A4EA39C5444E33777598779",
      "6D3F95ACC46489CD5674B45B003C84D2",
      "0D4C07F76B5820F3F5617D4978CCCD4C",
      "4126B4927040168C7966127AD256FE70",
      "14972F30A2B652AA7CFE37C8CFD19428",
      "6376BA8D309FC093699F75199E62B3CD",
      "F74DB949B8724FEEB0F5F646250DE72D",
      "35167E4B86400640B83233B074CC4752",
      "5E1FA660A230419EB7E5077B43EF9B65",
      "CB17A0FDAE007E51C539A33E51B61371",
      "24C6705BE5ABA9F66BCD2CBECC9F292D",
      "672402050D5C51B54E21ED9AC7378D09",
      "60ECF016CD992D194E73E6F8304BE8AA",
      "067F7A6667491CF41B5FF92B5219801D",
      "5738191D258728977C4AADB814AB65D9",
      "3635138D040CCBAE079916ECE37018E9",
      "C310D7A38FEE33263C99F3EEB898E205",
      "B7D650EE9E152B85EB683401B5F5768B",
      "DAC68DFF929E39B21DCEA39EE66FC263",
      "36262AC23C5829EABC90BD26B3F54476",
      "E0A15150DBAC39C83C47474865FF9F7F",
      "2C2772E6778A3BE87D21C81E4B34BC59",
      "39982839DAD06678416A0ECE14838F71",
      "4D91D6043278AA32F246FB8CF494A0B3",
    ];
    codes = [
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "1-I",
      "2-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "5-V",
      "6-H",
      "7-I",
      "8-O",
      "9-V",
      "10-H",
      "2-I",
      "1-O",
      "3-V",
      "4-H",
      "5-I",
      "6-O",
      "7-V",
      "8-H",
      "9-I",
      "10-O",
      "1-V",
      "2-H",
      "3-I",
      "4-O",
      "8-V",
    ];

    const output = document.getElementById("output");
    var fullname = $("#emailinput").val();
    if (fullname.length < 2) {
      var text = "Please Enter your Email ";
      if (output.value !== null || output.value !== undefined) {
        output.innerHTML = text;
      } else {
        output.innerHTML = " ";
      }
      return;
    }
    add = false;
    for (var i = 0; i < names.length; i++) {
      if (names[i].includes(md5(fullname))) {
        var text = codes[i];
        if (output.value !== null || output.value !== undefined) {
          output.innerHTML = text;
        } else {
          output.innerHTML = " ";
        }

        add = true;
        break;
      }
    }
    if (!add) {
      var text =
        " We can't find your email, please contact one of the party organisers! :) ";
      if (output.value !== null || output.value !== undefined) {
        output.innerHTML = text;
      } else {
        output.innerHTML = " ";
      }
    }
  });



  // Call the function to change the default section on page load
  //changeDefaultSection();
});
