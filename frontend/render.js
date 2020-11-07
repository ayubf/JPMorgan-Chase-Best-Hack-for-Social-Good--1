function grabUserInfo() {
    ///Takes values from the inputs and stores them as variables
    let userGradYr = document.getElementById('userGradYr').value;
    let userCollege = document.getElementById('userCollege').value;
    let userDegree = document.getElementById('userDegree').value;
    let userDebt = "$"+ document.getElementById('userDebt').value;
    let userIntrstRate = document.getElementById('userIntrstRate').value+'%';

    ///Makes the submission thing disappear and the charts appear
    document.getElementById('submission').style.display = 'none';
    document.getElementById('charts').style.display = 'block';

    ///Just to make sure it works, I'll display the info it just grabbed and put it into the charts div
    alert(`Expected Graduation Date: ${userGradYr}`);
    alert(`College: ${userCollege}`);
    alert(`Degree: ${userDegree}`);
    alert(`Debt: ${userDebt}`);
    alert(`Interest Rate: ${userIntrstRate}`);
};