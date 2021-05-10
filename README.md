# New MoniTracer

## Instalations

Quick overview about the installation  of necessary programs to the development

### On windows
1. node.js

     [Chocolatey ](https://chocolatey.org/install) is needed for node.js installation: 
    * Open windows powershell as admnistrator
    * Run the command:

       ``` Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) ```

    * To see if everything went well, just type:
  
        ``` choco  ```
        
       
    * Now, install node.js with Chocolatey:  
    ``` choco install -y nodejs.install openjdk8 ```

2. Android Studio

   * Download and install Android Studio from [this](https://developer.android.com/studio/index.html) website.
   * In the installation menu keep the following boxes selected:
     * Android Studio
     * Android Virtual Device
3. Android SDK
   
   * Open Android Studio
   * Click in "Configure", then in "SDK Manager"
   * Look for "Android 10 (Q)" (not Android 11 (R)) If not installed, click and download it.
   * Select:
     * Android SDK Plataform 29
     * Intel x86 Atom_64 System Image OR Google APIs Intel x86 Atom System Image
   * Then, select "SDK Tools" and select "Show Package Details"
   * Open "Android SDK Build-tools"
   * Check if "29.0.2" is selected
   * Then, click in "Apply"

4. Update Windows environment variables 
   * Go to "Windows Control Panel → User Accounts → User Accounts"
   * Click in "Change my Environment Variables"
   * Click in "New"
   * Create the new variable:
     * Variable name: ANDROID_HOME
     * Variable value: %LOCALAPPDATA%\Android\Sdk
  
    * Click again in "Change my environment Variables"
    * Click in "Path", then in "Edit"
    * Write: %LOCALAPPDATA%\Android\Sdk\platform-tools


        _If something goes wrong_ (part 1): Variable value corresponds to the location where the Andoird SDK has been instaled, check if it really is in the defalut location. If it isn't, you cant find it opening Android Studio, then in "Settings → Appearance & Behavior →  System Settings → Android SDK"

        _If something goes wrong_ (part 2): You can check if the variables are corectly setted. Type in the powershell ``` Get-ChildItem -Path Env:\ ``` and look for ANDROID_HOME

        Now we ned to configure another environment variable:
    