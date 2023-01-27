
export const printPage = (printContents: string, data: Data) => {
  const popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  if (popupWin) {
    popupWin.document.open();
    popupWin.document.write(`
				<html>
					<head>
						<title>${data.title}</title>
						<style type="text/css">
              p {
                font-family: "Times New Roman";
              }

              .padding-main-divcls{
                padding: 5px;
              }

              .text-center{
                text-align: center
              }
              .width-full{
                width: 100%;
              }

              .box{
                  border-style: solid;
                  border-width: 1px;
                  width: 65px;
                  height: 100px;
                  float: right;
                  margin-right: 50px;
                  font-size: 10px;
                  padding: 5px;
              }
              .box-divcls{
                width: 100%;
                display: inline-block;
              }

              .TermsConditionTable, tr , td {
								padding: 4px !important;
							}
							tr, td {
								page-break-inside: avoid !important;
							}


							.break-after{
								page-break-after: always;
							}
              .top-border-cls{
                border-top: solid black 1.0pt;
              }
            </style>
            <body onload="window.print();window.close()">${printContents}</body>
          </head>
        </html>
      `)
    popupWin.document.close();
  }
}

interface Data{
  title: string;
}
