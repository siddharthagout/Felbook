﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Felbook.Models;

namespace Felbook.Tests.Fakes
{
    class MockFileService : AbstractMockService, IFileService
    {

        public MockFileService(MockModel model) : base(model) { }

        #region Interface methods

        public string FileDir
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public string GetFileHref(File file)
        {
            throw new NotImplementedException();
        }

        public string GetFilePath(File file)
        {
            throw new NotImplementedException();
        }

        public void SaveFile(File file, System.Web.HttpPostedFileBase uploadedFile)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
