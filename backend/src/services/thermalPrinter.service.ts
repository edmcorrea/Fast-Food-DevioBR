import { config } from 'dotenv';
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

config();

const interfaceValue = process.env.interface;

class ThermalService {
  private printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: interfaceValue,
  });

  public async thermalPrintExecute(customer: string) {
    this.printer.alignCenter();
    this.printer.printQR(customer);
    this.printer.println(customer);
    this.printer.cut();

    try {
      this.printer.execute()
      console.log("Print done!");
    } catch (error) {
      console.error("Print failed:", error);
    }
  }
}

export default ThermalService;
