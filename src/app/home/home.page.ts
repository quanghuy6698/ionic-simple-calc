import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

enum OPERATORS {
  UNSET = '',
  ADD = '+',
  SUB = '-',
  MUL = '*',
  DIV = '/',
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private firstNum: string;
  private operator: OPERATORS;
  private secondNum: string;

  ngOnInit() {
    this.onAC();
  }

  /**
   * On press [AC]: Clear all input and result
   *
   */
  public onAC() {
    this.firstNum = '';
    this.secondNum = '';
    this.operator = OPERATORS.UNSET;
  }

  /**
   * On press [%]: Divide input by 100
   *
   */
  public onPercent() {
    if (this.secondNum) {
      this.secondNum = this.calculate(this.secondNum, OPERATORS.DIV, '100');
    } else if (this.firstNum) {
      this.firstNum = this.calculate(this.firstNum, OPERATORS.DIV, '100');
    }
  }

  /**
   * On press [(-)]: Multiple input by (-1)
   *
   */
  public onNegative() {
    if (this.secondNum) {
      this.secondNum = this.calculate(this.secondNum, OPERATORS.MUL, '-1');
    } else if (this.firstNum) {
      this.firstNum = this.calculate(this.firstNum, OPERATORS.MUL, '-1');
    }
  }

  /**
   * On press [Operator]: Set operator
   *
   * @param operator (+, -, *, /)
   */
  public onOperator(operator: string): void {
    if (!this.firstNum) {
      return;
    }
    switch (operator) {
      case '+':
        this.operator = OPERATORS.ADD;
        break;
      case '-':
        this.operator = OPERATORS.SUB;
        break;
      case '*':
        this.operator = OPERATORS.MUL;
        break;
      case '/':
        this.operator = OPERATORS.DIV;
        break;
      default:
        this.operator = OPERATORS.UNSET;
    }
  }

  /**
   * On press [Number]: Input number
   *
   * @param num refer to an integer in range [0,9]
   */
  public onNumber(num: string) {
    if (this.operator == OPERATORS.UNSET) {
      this.firstNum += num;
    } else {
      this.secondNum += num;
    }
  }

  /**
   * On press [.]: Add decimal point
   *
   */
  public onDecimalPoint() {
    if (this.secondNum && !this.secondNum.includes('.')) {
      this.secondNum += '.';
    } else if (this.firstNum && !this.firstNum.includes('.')) {
      this.firstNum += '.';
    }
  }

  /**
   * On press [=]: Calculate result
   *
   */
  public onEqual() {
    if (!this.firstNum || !this.secondNum) {
      return;
    } else {
      this.firstNum = this.calculate(this.firstNum, this.operator, this.secondNum);
      this.operator = OPERATORS.UNSET;
      this.secondNum = '';
    }
  }

  /**
   * Calculate
   *
   */
  private calculate(num1Str: string, operator: OPERATORS, num2Str: string): string {
    let result = math.evaluate('' + num1Str + operator + '(' + num2Str + ')');
    return result.toString();
  }
}
