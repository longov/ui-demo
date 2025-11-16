#include <jni.h>
#include "coin98_sdkuiOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::coin98_sdkui::initialize(vm);
}
