// try here http://pdfmake.org/playground.html

var dd = {
  margin: 0,
  content: [
    {
      // Judul
      text: "SALES INVOICE",
      bold: true,
      fontSize: 25,
      style: "center",
      margin: [0, 0, 0, 20],
    },
    {
      columns: [
        {
          width: "58%",
          columns: [
            {
              // Data Pelanggan
              layout: "noBorders",
              table: {
                widths: ["*", 1, "auto"],
                body: [
                  [
                    {
                      text: "Nama Bisnis",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "PT. DUNIA PRATAMA SEJAHTERA",
                    },
                  ],
                  [
                    {
                      text: "Alamat Bisnis",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "LINDETEVES TRADE CENTER (LTC) GLODOK LANTAI UG BLOK C3 NO. 6, JL. HAYAM WURUK NO.127 RT 01 RW.06 MANGGA BESAR TAMAN SARI KOTA ADM. JAKARTA BARAT DKI JAKARTA 11180",
                    },
                  ],
                  [
                    {
                      text: "Nama Pelanggan",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "PT. MITRACO HOSETAMA",
                    },
                  ],
                  [
                    {
                      text: "Alamat Pelanggan",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "GEDUNG LINDETEVES TRADE CENTRE LT.SB JL. HAYAM WURUK NO.127 Blok A1 No.6 Kel. MANGGA BESAR, Kec. TAMAN SARI, Kota/Kab. JAKARTA BARAT DKI JAKARTA 11180",
                    },
                  ],
                  [
                    {
                      text: "Telepon",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "0812-3456-789",
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          width: "3%",
          text: "",
        },
        {
          width: "39%",
          columns: [
            {
              // Data Invoice
              layout: "noBorders",
              table: {
                widths: ["*", 1, "auto"],
                body: [
                  [
                    {
                      text: "Referensi",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "INV/DPS/11/12/24/00041",
                    },
                  ],
                  [
                    {
                      text: "Tanggal",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "11/12/2024",
                    },
                  ],
                  [
                    {
                      text: "Jatuh Tempo",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "10/01/2025",
                    },
                  ],
                  [
                    {
                      text: "Surat Jalan",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "SJ/DPS/11/12/24/00041",
                    },
                  ],
                  [
                    {
                      text: "Pemesanan",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "SO/DPS/11/12/24/00041",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    "\n",
    {
      // Data Produk
      table: {
        headerRows: 1,
        widths: ["auto", "*", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: [
          [
            { text: "No.", style: "tableHeader" },
            { text: "Produk", style: "tableHeader" },
            { text: "Deskripsi", style: "tableHeader" },
            { text: "Kuantitas", style: "tableHeader" },
            { text: "Harga", style: "tableHeader" },
            { text: "Diskon", style: "tableHeader" },
            { text: "Pajak", style: "tableHeader" },
            { text: "Jumlah", style: "tableHeader" },
          ],
          [
            { text: 1, style: "center" },
            { text: 'DN SS304 1/2"', style: "left" },
            { text: "Fitting SS", style: "center" },
            { text: 20, style: "center" },
            { text: "5.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "100.000", style: "right" },
          ],
          [
            { text: 2, style: "center" },
            { text: 'BALL VALVE SANKYO 1PC 1/2"', style: "left" },
            { text: "BALL VALVE", style: "center" },
            { text: 12, style: "center" },
            { text: "12.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "200.000", style: "right" },
          ],
          [
            { text: 3, style: "center" },
            { text: 'ELBOW LAS SS304 S10 LR 1/2" ', style: "left" },
            { text: "ELBOW LAS", style: "center" },
            { text: 1, style: "center" },
            { text: "260.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "144.000", style: "right" },
          ],
          [
            { text: 4, style: "center" },
            { text: 'BALL VALVE SANKYO 3PC 2"', style: "left" },
            { text: "BALL VALVE", style: "center" },
            { text: 1, style: "center" },
            { text: "21.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "260.000", style: "right" },
          ],
          [
            { text: 5, style: "center" },
            { text: 'PIPA NEPEL 10CM SS304 2"', style: "left" },
            { text: "NIPPLE HOSE", style: "center" },
            { text: 1, style: "center" },
            { text: "21.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "21.000", style: "right" },
          ],
        ],
      },
    },
    "\n",
    {
      columns: [
        {
          // pesan
          width: "70%",
          columns: [
            {
              layout: "noBorders",
              table: {
                body: [
                  [
                    {
                      bold: true,
                      text: "Pesan\n",
                    },
                  ],
                  [
                    {
                      text: "Pemujaan yang berlebihan itu tak sehat! Ayo, Jeffry",
                    },
                  ],
                  [
                    {
                      bold: true,
                      text: "Barang yang sudah dibeli tidak dapat ditukar/dikembalikan",
                    },
                  ],
                  [
                    {
                      text: "Bank : Bank BCA",
                    },
                  ],
                  [
                    {
                      text: "No. Rek : 5885-238-111",
                    },
                  ],
                  [
                    {
                      text: "A/n : Dunia Pratama Sejahtera",
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          // Total
          width: "30%",
          columns: [
            {
              layout: "noBorders",
              table: {
                headerRows: 1,
                widths: ["*", "auto"],
                body: [
                  [
                    {
                      bold: true,
                      text: "Subtotal",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 725.000",
                    },
                  ],
                  [
                    {
                      bold: true,
                      text: "Pajak PPN 11%",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 79.750",
                    },
                  ],
                  [
                    {
                      bold: true,
                      text: "Total",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 804.750",
                    },
                  ],
                  [
                    {
                      bold: true,
                      text: "Sisa Tagihan",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 804.750",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    "Terbilang",
    {
      margin: [0, 5],
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 350, y2: 0, lineWidth: 1 }],
    },
    "Delapan Ratus Empat Ribu Tujuh Ratus Lima Puluh Rupiah",
    {
      // ttd
      margin: [0, 15, 0, 0],
      layout: "noBorders",
      table: {
        widths: ["20%", "20%", "20%", "40%"],
        // widths: '25%',
        body: [
          [
            {
              style: "center",
              text: "Diperiksa Oleh",
            },
            {
              style: "center",
              text: "Diterima Oleh",
            },
            {
              style: "center",
              text: "Pengirim",
            },
            {
              style: "center",
              text: "Dengan Hormat",
            },
          ],
        ],
      },
    },
    {
      margin: [0, 75, 0, 0],
      layout: "noBorders",
      table: {
        widths: ["20%", "20%", "20%", "40%"],
        // widths: '25%',
        body: [
          [
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: ["center", "underline"],
              text: "PT. DUNIA PRATAMA SEJAHTERA",
            },
          ],
        ],
      },
    },
  ],
  styles: {
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: "black",
      alignment: "center",
    },
    left: {
      alignment: "left",
    },
    center: {
      alignment: "center",
    },
    right: {
      alignment: "right",
    },
    underline: {
      decoration: "underline",
    },
  },
  defaultStyle: {
    columnGap: 0,
    fontSize: 10,
    lineHeight: 1,
  },
};
