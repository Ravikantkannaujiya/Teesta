const express=require('express');
const mongoose=require("mongoose");
const model = require('./models/user');
const ExcelJs =require('exceljs');
// const sheetData=require('sheetData.json')

const app = express();
app.listen(3000, () => {
    console.log('started my server');
});

mongoose.connect('mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/RKK-DB?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then((data) => {
        console.log('connected to database');
    });


app.get('/sheet', async (req, res) => {
    try {
        const users = await user.find(sheetData);
        const workbook = new ExcelJs.Workbook();
        const worksheet = workbook.addWorksheet('My Users');
        worksheet.columns = [
            {header: 'id', key: 'id'},
            {header: 'fisrt_name', key: 'fisrt_name'},
            {header: 'last_name', key: 'last_name'},
            {header: 'email', key: 'email'},
            {header: 'gender', key: 'gender'},
            {header: 'ip_address', key: 'ip_address'},
            {header: 'account no.', key: 'account no.'},
            {header: 'mobile no.', key: 'mobile no.'},
        ];
        users.forEach(user => {
            worksheet.addRow(user);
            
        });
        worksheet.getRow(1).eachCell((cell) => {
            cell.font = {bold: true};
        });
        const data = await workbook.xlsx.writeFile('users.xlsx')
        res.send('done');
    } catch (err) {
        res.status(500).send(err);
    }
});