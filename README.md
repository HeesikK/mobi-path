# Suspense와 errorboundary

suspense와 errorboundary는 자식 컴포넌트가 promise resolve 될 때 까지
fallback을 display하는 컴포넌트입니다.

<Suspense fallback={<Loading />}>
<SomeComponent />
</Suspense>

특히, 그중 errorboundary는 자식 컴포넌트의 promise가 reject 되었을 때
fallback을 display하는 것 뿐만아니라 throw 된 error를 감지하여 error를 상위 레이어에서
핸들링할 수 있습니다.

npm install react-error-boundary
yarn add react-error-boundary

> > 하위 컴포넌트에서 발생한 error가 ErrorFallback으로 throw 되면서 감지 가능
> > const ErrorFallback = (err) => {
> > console.log(err.error.status);
> > console.log(err.error.message);
> > return(<div>error</div>)
> > }

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Error />
</ErrorBoundary>
