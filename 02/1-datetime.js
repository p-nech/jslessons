
            function formatDate(d) {
                let year = String( d.getFullYear() ).slice(2);
                let month = String( zeroBeforeNum( d.getMonth() + 1 ) );
                let day = String( zeroBeforeNum( d.getDate() ) );
                
                function zeroBeforeNum(num) {
                    return (+num < 10) ? '0' + num : num;
                }

                return day + '.' + month + '.' + year;
            }

            let d = new Date(2014, 0, 30);
            alert( formatDate(d) );