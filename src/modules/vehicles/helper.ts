// tslint:disable-next-line:no-var-requires
const excel = require('excel4node');
import { getConnection } from 'typeorm';

export const workbook = new excel.Workbook();

// <---Heading column names--->
export const headingColumnNames = [
  'Make',
  'Model',
  'Generation',
  'Engine',
  'Engine Code',
  'Engine Family',
  'DSG Family',
  'Power [hp]',
  'Torque [Nm]',
  'Power [hp]',
  'Torque [Nm]',
  'Location availability',
  'Price',
  'Power [hp]',
  'Torque [Nm]',
  'Location availability',
  'Price',
  'Power [hp]',
  'Torque [Nm]',
  'Location availability',
  'Engine software options',
  'Hardware modifications',
  'Warnings',
  'Price',
  'Power [hp]',
  'Torque [Nm]',
  'Location availability',
  'Engine software options',
  'Hardware modifications',
  'Warnings',
  'Price',
  'Power [hp]',
  'Torque [Nm]',
  'Location availability',
  'Engine software options',
  'Hardware modifications',
  'Warnings',
  'Price',
  'status',
  'createdAt',
  'updatedAt',
];

// <---Cell styles--->
export const emptyBlackCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#000000',
    fgColor: '#000000',
  },
});

export const emptyGrayCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#d9d9d9',
    fgColor: '#d9d9d9',
  },
});

export const emptyBlueCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#bdd7ee',
    fgColor: '#bdd7ee',
  },
});
export const emptyRedCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#ff8f8f',
    fgColor: '#ff8f8f',
  },
});

export const emptyGreenCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#d9ead3',
    fgColor: '#d9ead3',
  },
});

export const emptyCombiCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#b4c7e7',
    fgColor: '#b4c7e7',
  },
});

export const warningCell = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#ff420e',
    fgColor: '#ff420e',
  },
});

export const rightBorderCell = workbook.createStyle({
  border: {
    right: {
      style: 'medium',
      color: '#000000',
    },
  },
});

export const topBorderCell = workbook.createStyle({
  border: {
    top: {
      style: 'medium',
      color: '#000000',
    },
  },
});

export const normalDataStyle = workbook.createStyle({
  alignment: {
    horizontal: 'center',
    vertical: 'center',
    wrapText: true,
  },
  font: {
    color: '#000000',
    name: 'Calibri',
    size: 11,
  },
  height: '100pt',
  border: {
    top: {
      style: 'thin',
      color: '#000000',
    },
    left: {
      style: 'thin',
      color: '#000000',
    },
    right: {
      style: 'thin',
      color: '#000000',
    },
    bottom: {
      style: 'thin',
      color: '#000000',
    },
  },
});

export const headingStyle = workbook.createStyle({
  alignment: {
    horizontal: 'center',
    vertical: 'center',
    wrapText: true,
  },
  font: {
    color: '#000000',
    name: 'Arial',
    size: 11,
    bold: true,
  },
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#d9d9d9',
    fgColor: '#d9d9d9',
  },
  border: {
    top: {
      style: 'medium',
      color: '#000000',
    },
    left: {
      style: 'thin',
      color: '#000000',
    },
    right: {
      style: 'thin',
      color: '#000000',
    },
  },
});

export const vehInfo = workbook.createStyle({
  font: {
    color: '#000000',
    name: 'Arial',
    size: 12,
    bold: true,
  },
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#d9d9d9',
    fgColor: '#d9d9d9',
  },
});

export const chipTuning = workbook.createStyle({
  font: {
    color: '#000000',
    name: 'Arial',
    size: 16,
    bold: true,
  },
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#d9d9d9',
    fgColor: '#d9d9d9',
  },
  border: {
    left: {
      style: 'medium',
      color: '#000000',
    },
    top: {
      style: 'medium',
      color: '#000000',
    },
  },
});

export const stages = workbook.createStyle({
  font: {
    color: '#000000',
    name: 'Arial',
    size: 13,
    bold: true,
  },
  border: {
    left: {
      style: 'medium',
      color: '#000000',
    },
    top: {
      style: 'medium',
      color: '#000000',
    },
  },
});

export const stagesDSG = workbook.createStyle({
  font: {
    color: '#000000',
    name: 'Arial',
    size: 13,
    bold: true,
  },
  alignment: {
    wrapText: true,
    horizontal: 'center',
  },
});

export async function clearAllTablesVehicles() {
  const arrayTables = [
    'SET FOREIGN_KEY_CHECKS = 0; ',
    'TRUNCATE dsg_options; ',
    'TRUNCATE dsg_options_two; ',
    'TRUNCATE general_pricing; ',
    'TRUNCATE vehicles; ',
    'TRUNCATE vehicles_combo_prices; ',
    'TRUNCATE vehicles_dsg; ',
    'TRUNCATE vehicles_file; ',
    'TRUNCATE vehicles_options; ',
    'TRUNCATE vehicles_options_two; ',
  ];
  arrayTables.map(async item => {
    await getConnection().query(item);
  });
}

export async function addCellBlanckAndTitle(data, columns) {
  return new Promise(resolve => {
    let lastType = '';
    const arrayTemp = [];
    data.forEach((item: any, index) => {
      if (item.type.toString() !== lastType.toString() && index !== 0) {
        let name = '';
        switch (item.type) {
          case columns[0].key:
            name = columns[0].value;
            break;
          case columns[1].key:
            name = columns[1].value;
            break;
          case columns[2].key:
            name = columns[2].value;
            break;
          case columns[3].key:
            name = columns[3].value;
            break;
          default:
            name = columns[0].value;
        }

        arrayTemp.push({
          id: '',
          option_id: '',
          name: '',
          description: '',
          options: '',
          type: '',
        });
        arrayTemp.push({
          id: 'DRAW',
          option_id: 'ID',
          name,
          description: 'Explanation',
          options: 'Options',
          type: 'Type',
        });
      }
      arrayTemp.push(item);
      lastType = item.type;
      resolve(arrayTemp);
    });
  });
}
