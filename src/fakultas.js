//base image path
const baseImagePath = './public/images/fakultas/'

const fakultas = [
  {
    slug: 'fpmipa',
    name: 'FPMIPA',
    url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
    full_name: 'Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam',
    gallery: [
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
      'http://165.22.109.98:9999/img/FPMIPA.jpg',
    ],
    ratio: '1:30',
    avg_study_time: '3.5',
    stats: [
      {
        title: 'Rasio Dosen Berdasarkan Gender',
        data: [
          {
            tahun: '2021',
            laki_laki: 38,
            perempuan: 62,
          },
          {
            tahun: '2022',
            laki_laki: 40,
            perempuan: 60,
          },
        ],
      },{
        title: 'Rasio Dosen Berdasarkan Jenjang Pendidikan Terakhir',
         data: [
          {
            tahun: '2021',
            s2: 53,
            s3: 47,
          },
          {
            tahun: '2022',
            s2: 41,
            s3: 59,
          },
        ],
      }
    ],
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    slug: 'fip',
    name: 'FIP',
    url_image: 'http://165.22.109.98:9999/img/FIP.png',
    full_name: 'Fakultas Ilmu Pendidikan',
    gallery: [
      'http://165.22.109.98:9999/img/FIP.png',
      'http://165.22.109.98:9999/img/FIP.png',
      'http://165.22.109.98:9999/img/FIP.png',
      'http://165.22.109.98:9999/img/FIP.png',
      'http://165.22.109.98:9999/img/FIP.png',
      'http://165.22.109.98:9999/img/FIP.png',
    ],
    ratio: '1:30',
    avg_study_time: '3.5',
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9999/img/FIP.png',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    name: 'FPIPS',
    slug: 'fpips',
    url_image: 'http://165.22.109.98:9999/img/FPIPS.jpg',
  },
  {
    name: 'FPBS',
    slug: 'fpbs',
    url_image: 'http://165.22.109.98:9999/img/FPBS.jpg',
  },
  {
    name: 'FPSD',
    slug: 'fpsd',
    url_image: 'http://165.22.109.98:9999/img/FPSD.jpg',
  },
  {
    name: 'FPTK',
    slug: 'fptk',
    url_image: 'http://165.22.109.98:9999/img/FPTK.jpg',
  },
  {
    name: 'FPOK',
    slug: 'fpok',
    url_image: 'http://165.22.109.98:9999/img/FPOK.jpg',
  },
  {
    name: 'FPEB',
    slug: 'fpeb',
    url_image: 'http://165.22.109.98:9999/img/FPEB.jpeg',
  },
  {
    name: 'Tasikmalaya',
    slug: 'tasikmalaya',
    url_image: 'http://165.22.109.98:9999/img/Tasikmalaya.jpg',
  },
  {
    name: 'Cibiru',
    slug: 'cibiru',
    url_image: 'http://165.22.109.98:9999/img/Cibiru.jpeg',
  },
  {
    name: 'Sumedang',
    slug: 'sumedang',
    url_image: 'http://165.22.109.98:9999/img/Sumedang.jpg',
  },
  {
    name: 'Purwakarta',
    slug: 'purwakarta',
    url_image: 'http://165.22.109.98:9999/img/Purwakarta.jpg',
  },
  {
    name: 'Serang',
    slug: 'serang',
    url_image: 'http://165.22.109.98:9999/img/Serang.jpg',
  },
]

module.exports = fakultas
