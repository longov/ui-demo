package com.margelo.nitro.coin98.sdkui
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class SdkUi : HybridSdkUiSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
