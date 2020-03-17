const alarmaData = [];

const updateOneAlarm = (alarma) => {
    if(!alarmaData.some(a => a.getDate() === alarma.horaIngesta.getDate())) {
        alarmaData.push(alarma.horaIngesta);
      };
};

const updateAlarmaData = (alarmas) => {
    alarmas.forEach(alarma => {
        updateOneAlarm(alarma);
      });
};

export {
    alarmaData,
    updateAlarmaData,
    updateOneAlarm
};