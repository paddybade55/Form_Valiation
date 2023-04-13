import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-neft-rtgs-challan',
  templateUrl: './generate-neft-rtgs-challan.component.html',
  styleUrls: ['./generate-neft-rtgs-challan.component.scss']
})

export class GenerateNeftRtgsChallanComponent implements OnInit {

  transactionId = 220928132103337;
  date: Date = new Date("2022-09-28");
  total_Amount = '12.00';

  public paymentDetailsDisplaycolumn: string[] = ['Amount', 'Conveneience Fee', 'GST'];
  paymentDetails: any;
  inputData:any = inputData;
  paymentDetailsColumns: string[] = [];

  public payerDetailsDisplayColumn: string[] = ['Email Id', 'Mobile Number', 'Test', 'Remark'];
  payerDetails: any;
  inputData2:any = inputData2;
  payerDetailsDisplayColumns: string[] = [];

  constructor() {}

  ngOnInit() {
    this.paymentDetailsColumns = ['0'].concat(this.inputData.map((x: { toString: () => any; }) => x.toString()));
    this.paymentDetails = this.paymentDetailsDisplaycolumn.map(x => this.formatInputRow(x));

    this.payerDetailsDisplayColumns = ['0'].concat(this.inputData2.map((x: { toString: () => any; }) => x.toString()));
    this.payerDetails = this.payerDetailsDisplayColumn.map(x => this.formatInputRow2(x));
  }

  formatInputRow(row: string) {
    const output :any = {};

    output[0] = row;
    for (let i = 0; i < this.inputData.length; ++i) {
      output[this.inputData[i]] = this.inputData[i][row];
    }
    return output;
  }
  formatInputRow2(row: string) {
    const output2 :any = {};

    output2[0] = row;
    for (let i = 0; i < this.inputData2.length; ++i) {
      output2[this.inputData2[i]] = this.inputData2[i][row];
    }
    return output2;
  }
}

export interface paymentDetails {
    Amount : string;
    'Conveneience Fee' : string;
    GST : string;
}
const inputData: paymentDetails[] = [
  {
    Amount: '2.0',
    'Conveneience Fee': '8.47',
    GST: '1.53'
  },
];

export interface payerDetails {
  'Email Id' : string;
  'Mobile Number' : string;
  Test : string;
  Remark : string;
}

const inputData2 : payerDetails[] = [
  {
    'Email Id' : 'kartik.kulkarni@icicibank.com',
    'Mobile Number' : '8291373747',
    Test : 'NA',
    Remark : 'NA'
  }
]
