let start = document.getElementsByClassName('start');
    yearValue = document.getElementsByClassName('year-value'),
    monthValue = document.getElementsByClassName('month-value'),
    dayValue = document.getElementsByClassName('day-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelectorAll('.choose-income'),
    checkSavings = document.getElementById('savings'),
    chooseSum = document.querySelectorAll('.choose-sum'),
    choosePercent = document.querySelectorAll('.choose-percent'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optExpValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value');
    
    let summ = 0;
    
    start[0].addEventListener('click', function (){
        appData.first = true;
        let money = prompt("Ваш бюджет на месяц?" , ""),
            time = prompt("Введите дату в формате YYYY-MM-DD" , "");

         while (isNaN(money) || money == null || money === "") {
            money = prompt("Ваш бюджет на месяц?" , "");
        }
        appData.budget = money;
        appData.time = time;

        budgetValue[0].textContent = money;
        yearValue[0].value = new Date(Date.parse(time)).getFullYear();
        monthValue[0].value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue[0].value = new Date(Date.parse(time)).getDate();

        expensesItemBtn.addEventListener('click', function() {
            
            for (let i = 0; i < expensesItem.length; i++) {
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;

                if((typeof(a)) != null &&  (typeof(b)) != null &&  a != "" &&  b != "" && a.length < 7) {
                    appData.expences[a] = b;
                    summ =summ + +b;
                }else {
                    i--;
                }    
                expensesValue[0].textContent = summ;
            }  
    });
    });

    
   
        
    optionalExpensesBtn.addEventListener('click', function() {
        if(appData.first == true){console.log(summ);
            for (let i = 0; i < optionalExpensesItem.length; i++) {
                let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optExpValue[0].textContent += appData.optionalExpenses[i] + ' ';
            }
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });

    countBudgetBtn.addEventListener('click', function() {
        if(appData.first == true){
            if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - summ) / 30).toFixed();
            daybudgetValue[0].textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100){
                levelValue[0].textContent = 'Минимальный доход';
            }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                levelValue[0].textContent = 'Средний доход';
            }else if (appData.moneyPerDay > 2000){
                levelValue[0].textContent = 'Высокий доход';
            }else {
                levelValue[0].textContent = 'Ошибка';
            }
            } else {
                alert ('Введите свой доход');
            }
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });

    chooseIncome[0].addEventListener('input', function() {
        if(appData.first == true){
            let inc = chooseIncome[0].value;
            appData.income = inc.split(', ');
            incomeValue[0].textContent = appData.income;
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });
   
    checkSavings.addEventListener('click', function(){
        if(appData.first == true){
            if(appData.savings == true){
                appData.savings = false;
            }else {
                appData.savings = true;
            }
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });

    chooseSum[0].addEventListener('input', function(){
        if(appData.first == true){
            if(appData.savings == true){
                let sum = +chooseSum[0].value,
                    parcent = +choosePercent[0].value;

                    appData.monthIncome = sum/100/12*parcent;
                    appData.yearIncome = sum/100*parcent;
                    
                    monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
                    yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
            }
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });

    choosePercent[0].addEventListener('input', function(){
        if(appData.first == true){
            if(appData.savings == true){
                let sum = +chooseSum[0].value,
                parcent = +choosePercent[0].value;

                appData.monthIncome = sum/100/12*parcent;
                appData.yearIncome = sum/100*parcent;
            
                monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
            }
        }else {
            alert('Нажмите кнопку "Начать расчет"');
        }
    });

    let appData = {
        expences: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        first: false
    };
  
        
     