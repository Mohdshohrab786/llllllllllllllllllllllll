var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function myfunction(dev, form) {

    //alert("test1");
    var brandName = $('#' + dev + form + '_brand').val();
    var catName = $('#' + dev + form + '_category').val();
    var firstName = $('#' + dev + form + '_Name').val();
    var email = $('#' + dev + form + '_Email').val();
    var phone = $('#' + dev + form + '_Mobile').val();
    var lookingfor = "-"; //$('#'+dev+form+'_Lookingfor').val();
    var tform = $('#' + dev + form + '_source').val();
    var ccode = $('#' + dev + form + '_captcha').val();
    var source = getUrlParameter('utm_source');
    var medium = getUrlParameter('utm_medium');
    var campaign = getUrlParameter('utm_campaign');
    var term = getUrlParameter('utm_term');
    var formData = {
        brandName: brandName,
        catName: catName,
        name: firstName,
        email: email,
        phone: phone,
        lookingfor: lookingfor,
        source: source,
        medium: medium,
        campaign: campaign,
        term: term,
        tform: tform,
        ccode: ccode
    };

    if (callValidation(dev, form)) // Calling validation function
    {
        $('#' + dev + form + '_submit').prop('disabled', true);
        $('#' + dev + form + '_submit').text('Processing...');
        console.log('Processing...');
        $.ajax({
            type: 'POST',
            url: "formdata.php",
            data: formData,
            success: function(resultData) {
                if (resultData == "Please enter correct Captcha Code") {
                    alert(resultData);
                    $('#' + dev + form + '_submit').prop('disabled', false);
                    $('#' + dev + form + '_submit').text('Submit');
                } else {
                    //alert(resultData);
                    location.href = "thankyou.php";
                    $('#' + dev + form + '_submit').prop('disabled', true);
                }
            }
        });
    }
}

function callValidation(dev, form) {
    var str = 'Please Enter ';
    var name = document.getElementById(dev + form + '_Name').value;
    var email = document.getElementById(dev + form + '_Email').value;
    var phone = document.getElementById(dev + form + '_Mobile').value;
    //var lookingfor = document.getElementById(dev+form+'_Lookingfor').value;
    var code = document.getElementById(dev + form + '_captcha').value;
    if (name == '' && email == '' && phone == '' && code == '') {
        alert('Please fill all the Fields');
        return false;
    }
    if (document.getElementById(dev + form + '_Name').value == '') {
        alert('Please enter Name');
        return false;
    } else {
        var x = document.getElementById(dev + form + '_Name').value;
        var reg = /^[A-z ]+$/;
        if (!reg.test(x)) {
            alert('Name must contain only characters');
            return false;
        }
    }

    var p;
    p = document.getElementById(dev + form + '_Mobile').value;
    if (isNaN(p) || p < 5999999999 || p > 10000000000) {
        alert("Please enter a valid 10-digit Mobile number");
        return false;
    }

    if (document.getElementById(dev + form + '_Email').value == '') {
        alert('Please enter Email');
        return false;
    } else {
        var email = document.getElementById(dev + form + '_Email').value;
        var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (!emailReg) {
            alert("You have entered an invalid email address!")
            return false;
        }
    }

    if (document.getElementById(dev + form + '_captcha').value == '') {
        alert('Please Enter Captcha');
        return false;
    }

    return true;
}

function checkmobile(dev, form) {
    $('#' + dev + form + '_Mobile').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
    });

}