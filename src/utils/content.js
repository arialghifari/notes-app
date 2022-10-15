const navigation = {
  en: {
    title: 'NOTES APP',
    navNotes: 'My Notes',
    navArchived: 'Archived',
		logout: 'Logout'
  },
  id: {
    title: 'APLIKASI CATATAN',
    navNotes: 'Catatan Saya',
    navArchived: 'Diarsipkan',
		logout: 'Keluar'
  },
};

const loginPage = {
  en: {
    title: 'Login to create note',
    button: 'LOGIN',
    text: "Don't have account?",
    link: 'Register',
  },
  id: {
    title: 'Masuk untuk membuat catatan',
    button: 'MASUK',
    text: 'Belum punya akun?',
    link: 'Daftar',
  },
};

const registerPage = {
  en: {
    title: 'Register to create note',
    button: 'REGISTER',
    confirmPassword: 'Confirm Password',
    text: 'Already have account?',
    link: 'Login',
  },
  id: {
    title: 'Daftar untuk membuat catatan',
    button: 'DAFTAR',
    confirmPassword: 'Konfirmasi Password',
    text: 'Sudah punya akun?',
    link: 'Masuk',
  },
};

const homeArchivePage = {
  en: {
    homeTitle: 'My Notes',
    archivedTitle: 'Archived Notes',
    search: 'Search note',
    noteList: 'Empty notes',
  },
  id: {
    homeTitle: 'Catatan Saya',
    archivedTitle: 'Arsip Catatan',
    search: 'Cari catatan',
    noteList: 'Tidak ada catatan',
  },
};

const createPage = {
  en: {
    title: 'Create Note',
    characters: 'characters left',
    inputTitle: 'Title',
    inputBody: 'Take a note',
    button: 'CREATE',
  },
  id: {
    title: 'Buat catatan',
    characters: 'karakter tersisa',
    inputTitle: 'Judul',
    inputBody: 'Tulis catatan',
    button: 'BUAT CATATAN',
  },
};

const detailPage = {
  en: {
    archive: 'ARCHIVE',
    unarchive: 'UNARCHIVE',
    delete: 'DELETE',
  },
  id: {
    archive: 'ARSIPKAN',
    unarchive: 'BATALKAN ARSIP',
    delete: 'HAPUS',
  },
};

export {
  navigation,
  loginPage,
  registerPage,
  homeArchivePage,
  createPage,
  detailPage,
};
